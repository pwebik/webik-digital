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
        start: { dateTime: startDate.toISOString(), timeZone: 'Asia/Manila' },
        end: { dateTime: endDate.toISOString(), timeZone: 'Asia/Manila' },
        attendees: [{ email }],
        conferenceData: {
          createRequest: {
            requestId,
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
      };

      const createRes = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1&sendUpdates=all`,
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
      fmtOpts.timeZone = 'Asia/Manila';
      const formattedDate = startDate.toLocaleString('en-US', fmtOpts);

      // Confirmation email to the client — branded HTML
      const clientHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;padding:0;background-color:#EBE8DD;font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EBE8DD;min-height:100%;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#F5F3EC;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(14,26,10,0.08);">
  <tr><td style="background-color:#0E1A0A;padding:32px 40px;text-align:center;">
    <img src="https://media.base44.com/images/public/69ecce3288377cd246349884/35800a971_Webikprimarylogo.png" alt="Webik Corp" width="140" style="height:auto;display:block;margin:0 auto;" />
  </td></tr>
  <tr><td style="padding:40px 40px 8px;">
    <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#6B7560;">( Confirmed )</p>
    <h1 style="margin:12px 0 0;font-family:'Host Grotesk',Georgia,serif;font-weight:300;font-size:28px;line-height:1.2;color:#0E1A0A;letter-spacing:-0.02em;">You're booked in, ${name}.</h1>
  </td></tr>
  <tr><td style="padding:8px 40px 0;">
    <p style="margin:0;font-size:15px;line-height:1.6;color:#6B7560;">Your 20-minute discovery call is confirmed. Here are the details:</p>
  </td></tr>
  <tr><td style="padding:24px 40px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EBE8DD;border-radius:12px;border:1px solid rgba(14,26,10,0.06);">
      <tr><td style="padding:20px 24px;border-bottom:1px solid rgba(14,26,10,0.06);">
        <p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#6B7560;">When</p>
        <p style="margin:6px 0 0;font-size:16px;font-weight:500;color:#0E1A0A;">${formattedDate}</p>
      </td></tr>
      <tr><td style="padding:20px 24px;border-bottom:1px solid rgba(14,26,10,0.06);">
        <p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#6B7560;">Duration</p>
        <p style="margin:6px 0 0;font-size:16px;font-weight:500;color:#0E1A0A;">20 minutes</p>
      </td></tr>
      ${meetLink ? `<tr><td style="padding:20px 24px;">
        <p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#6B7560;">Google Meet</p>
        <p style="margin:6px 0 0;font-size:15px;font-weight:500;color:#0E1A0A;word-break:break-all;">${meetLink}</p>
        <a href="${meetLink}" style="display:inline-block;margin-top:12px;padding:10px 22px;border-radius:9999px;background-color:#C8F048;color:#0E1A0A;font-size:14px;font-weight:600;text-decoration:none;">Join the Call</a>
      </td></tr>` : ''}
    </table>
  </td></tr>
  <tr><td style="padding:32px 40px 0;">
    <p style="margin:0 0 16px;font-size:11px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#6B7560;">What to Expect</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:8px 0;color:#6B7560;font-size:14px;line-height:1.5;"><span style="color:#C8F048;font-weight:700;margin-right:10px;">01</span> A relaxed conversation about your business, your goals, and what is not working right now</td></tr>
      <tr><td style="padding:8px 0;color:#6B7560;font-size:14px;line-height:1.5;"><span style="color:#C8F048;font-weight:700;margin-right:10px;">02</span> No pitch — just honest answers</td></tr>
      <tr><td style="padding:8px 0;color:#6B7560;font-size:14px;line-height:1.5;"><span style="color:#C8F048;font-weight:700;margin-right:10px;">03</span> We will follow up with a clear proposal within a few days</td></tr>
    </table>
  </td></tr>
  <tr><td style="padding:24px 40px 40px;">
    <p style="margin:0;padding-top:24px;border-top:1px solid rgba(14,26,10,0.08);font-size:13px;line-height:1.6;color:#6B7560;">Need to reschedule? Just reply to this email and we will sort it out.</p>
  </td></tr>
  <tr><td style="background-color:#0E1A0A;padding:24px 40px;text-align:center;">
    <p style="margin:0;font-size:13px;color:rgba(245,243,236,0.5);font-style:italic;">— The Webik Corp Team</p>
    <p style="margin:4px 0 0;font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:rgba(245,243,236,0.3);">webikdigital.com</p>
  </td></tr>
</table>
<p style="margin:20px 0 0;text-align:center;font-size:11px;color:#6B7560;">© 2026 Webik Corp. All rights reserved.</p>
</td></tr>
</table>
</body></html>`;

      try {
        await base44.integrations.Core.SendEmail({
          to: email,
          subject: 'Your Discovery Call is Booked — Webik Corp',
          body: clientHtml,
          from_name: 'Webik Corp',
        });
      } catch (emailErr) {
        // SendEmail is restricted to app users — Google Calendar's own invite (sendUpdates=all) covers external emails
      }

      // Notification email to the team — branded HTML
      const teamHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;padding:0;background-color:#EBE8DD;font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EBE8DD;min-height:100%;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#F5F3EC;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(14,26,10,0.08);">
  <tr><td style="background-color:#0E1A0A;padding:28px 40px;text-align:center;">
    <img src="https://media.base44.com/images/public/69ecce3288377cd246349884/35800a971_Webikprimarylogo.png" alt="Webik Corp" width="130" style="height:auto;display:block;margin:0 auto;" />
  </td></tr>
  <tr><td style="padding:32px 40px 8px;">
    <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#6B7560;">( New Booking )</p>
    <h1 style="margin:12px 0 0;font-family:'Host Grotesk',Georgia,serif;font-weight:300;font-size:24px;line-height:1.2;color:#0E1A0A;letter-spacing:-0.02em;">New Discovery Call — ${name}</h1>
  </td></tr>
  <tr><td style="padding:16px 40px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EBE8DD;border-radius:12px;border:1px solid rgba(14,26,10,0.06);">
      <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(14,26,10,0.06);"><p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#6B7560;">Client</p><p style="margin:4px 0 0;font-size:15px;font-weight:500;color:#0E1A0A;">${name}</p></td></tr>
      <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(14,26,10,0.06);"><p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#6B7560;">Email</p><p style="margin:4px 0 0;font-size:15px;font-weight:500;color:#0E1A0A;">${email}</p></td></tr>
      <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(14,26,10,0.06);"><p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#6B7560;">When</p><p style="margin:4px 0 0;font-size:15px;font-weight:500;color:#0E1A0A;">${formattedDate}</p></td></tr>
      ${meetLink ? `<tr><td style="padding:16px 20px;border-bottom:1px solid rgba(14,26,10,0.06);"><p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#6B7560;">Meet</p><p style="margin:4px 0 0;font-size:14px;font-weight:500;color:#0E1A0A;word-break:break-all;"><a href="${meetLink}" style="color:#0E1A0A;">${meetLink}</a></p></td></tr>` : ''}
      ${notes ? `<tr><td style="padding:16px 20px;"><p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#6B7560;">Notes</p><p style="margin:4px 0 0;font-size:14px;line-height:1.5;color:#0E1A0A;">${notes}</p></td></tr>` : ''}
    </table>
  </td></tr>
  <tr><td style="background-color:#0E1A0A;padding:20px 40px;text-align:center;">
    <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:rgba(245,243,236,0.4);">webikdigital.com</p>
  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;

      try {
        await base44.asServiceRole.integrations.Core.SendEmail({
          to: 'pryce@webikdigital.com',
          subject: `New Discovery Call — ${name}`,
          body: teamHtml,
          from_name: 'Webik Booking',
        });
      } catch (teamEmailErr) {
        // Non-critical — the calendar event is the source of truth
      }

      return Response.json({ success: true, meetLink, startISO: startDate.toISOString() });
    }

    return Response.json({ error: 'Unknown action' }, { status: 400 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});