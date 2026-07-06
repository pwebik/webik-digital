import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const { action } = body;

    // ── Get busy intervals for a date range ──
    if (action === 'getAvailability') {
      const { timeMin, timeMax } = body;
      if (!timeMin || !timeMax) {
        return Response.json({ error: 'timeMin and timeMax required' }, { status: 400 });
      }

      const { accessToken } = await base44.asServiceRole.connectors.getConnection('googlecalendar');
      const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events?` +
        `timeMin=${encodeURIComponent(timeMin)}&timeMax=${encodeURIComponent(timeMax)}&` +
        `orderBy=startTime&singleEvents=true&maxResults=50`;

      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!res.ok) {
        const err = await res.text();
        return Response.json({ error: err }, { status: res.status });
      }

      const data = await res.json();
      const busy = (data.items || [])
        .filter(e => e.start && e.end)
        .map(event => ({
          start: event.start.dateTime || event.start.date,
          end: event.end.dateTime || event.end.date,
        }));

      return Response.json({ busy });
    }

    // ── Book a discovery call ──
    if (action === 'bookCall') {
      const { startISO, name, email, notes, timezone } = body;
      if (!startISO || !name || !email) {
        return Response.json({ error: 'Missing required fields' }, { status: 400 });
      }

      const startDate = new Date(startISO);
      const endDate = new Date(startDate.getTime() + 20 * 60 * 1000);

      if (isNaN(startDate.getTime()) || startDate < new Date()) {
        return Response.json({ error: 'Invalid or past time slot' }, { status: 400 });
      }

      const { accessToken } = await base44.asServiceRole.connectors.getConnection('googlecalendar');

      // Conflict check — prevent double booking
      const checkUrl = `https://www.googleapis.com/calendar/v3/calendars/primary/events?` +
        `timeMin=${encodeURIComponent(startDate.toISOString())}&timeMax=${encodeURIComponent(endDate.toISOString())}&` +
        `singleEvents=true&maxResults=5`;
      const checkRes = await fetch(checkUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (checkRes.ok) {
        const checkData = await checkRes.json();
        if (checkData.items && checkData.items.length > 0) {
          return Response.json({ error: 'This time slot was just booked. Please choose another.' }, { status: 409 });
        }
      }

      // Create the calendar event with Google Meet
      const requestId = crypto.randomUUID();
      const event = {
        summary: `Discovery Call — ${name}`,
        description: `Booked by ${name} (${email})${notes ? `\n\nNotes:\n${notes}` : ''}`,
        start: { dateTime: startDate.toISOString() },
        end: { dateTime: endDate.toISOString() },
        attendees: [{ email }],
        conferenceData: {
          createRequest: {
            requestId,
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
      };

      const createRes = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1&sendUpdates=none`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(event),
        }
      );

      if (!createRes.ok) {
        const err = await createRes.text();
        return Response.json({ error: err }, { status: createRes.status });
      }

      const created = await createRes.json();
      let meetLink = created.conferenceData?.entryPoints?.find(ep => ep.entryPointType === 'video')?.uri;

      // Meet link may be pending — poll once after a short delay
      if (!meetLink && created.id) {
        await new Promise(r => setTimeout(r, 2000));
        const getRes = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/primary/events/${created.id}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        if (getRes.ok) {
          const fetched = await getRes.json();
          meetLink = fetched.conferenceData?.entryPoints?.find(ep => ep.entryPointType === 'video')?.uri;
        }
      }

      // Format date/time in the booker's timezone
      const fmtOpts = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: '2-digit',
      };
      if (timezone) fmtOpts.timeZone = timezone;
      const formattedDate = startDate.toLocaleString('en-US', fmtOpts);

      // Confirmation email to the client
      await base44.integrations.Core.SendEmail({
        to: email,
        subject: 'Your Discovery Call is Booked — Webik Corp',
        body: `Hi ${name},\n\nYour 20-minute discovery call is confirmed.\n\nWhen: ${formattedDate}\nDuration: 20 minutes\n${meetLink ? `Google Meet link: ${meetLink}\n\n` : ''}What to expect:\n- A relaxed conversation about your business, your goals, and what is not working right now\n- No pitch — just honest answers\n- We will follow up with a clear proposal within a few days\n\nNeed to reschedule? Just reply to this email.\n\n— The Webik Corp Team\nwebikdigital.com`,
        from_name: 'Webik Corp',
      });

      // Notification email to the team
      await base44.integrations.Core.SendEmail({
        to: 'pryce@webikdigital.com',
        subject: `New Discovery Call — ${name}`,
        body: `New discovery call booked.\n\nClient: ${name}\nEmail: ${email}\nWhen: ${formattedDate}\n${meetLink ? `Meet: ${meetLink}\n` : ''}${notes ? `Notes:\n${notes}` : ''}`,
        from_name: 'Webik Booking',
      });

      return Response.json({ success: true, meetLink, startISO: startDate.toISOString() });
    }

    return Response.json({ error: 'Unknown action' }, { status: 400 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});