import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const guideContent = `
<div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; color: #0E1A0A;">
  <div style="background: #0E1A0A; padding: 40px; text-align: center;">
    <h1 style="color: #C8F048; font-size: 28px; margin: 0; font-style: italic; font-weight: 300;">5 Signs Your Website Is Losing You Clients</h1>
    <p style="color: rgba(245,243,236,0.7); font-size: 14px; margin-top: 12px; font-family: monospace;">Webik Corp · webikdigital.com</p>
  </div>

  <div style="padding: 40px 32px;">
    <p style="font-size: 16px; line-height: 1.7; color: #6B7560; margin-top: 0;">
      Most businesses do not lose clients because of a bad product or service. They lose them because their digital presence does not match the quality of what they actually do.
    </p>

    <hr style="border: none; border-top: 1px solid #EBE8DD; margin: 32px 0;" />

    <h2 style="font-size: 20px; font-style: italic; font-weight: 300; color: #C8F048; background: #0E1A0A; padding: 16px 20px; border-radius: 8px;">Sign 01 — You Are Not Showing Up on Google</h2>
    <p style="font-size: 15px; line-height: 1.7; color: #6B7560; margin-top: 16px;">
      If someone in your city searches for what you do and your business does not appear in the results, you are invisible to the people most likely to buy from you. This is not a traffic problem — it is a foundation problem. Most websites are never properly configured for search engines, which means Google does not know what they are about, who they serve, or why they should rank.
    </p>
    <div style="background: #F5F3EC; border-left: 3px solid #C8F048; padding: 16px 20px; margin-top: 16px; border-radius: 0 8px 8px 0;">
      <strong style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #6B7560;">The Fix</strong>
      <p style="margin: 8px 0 0; font-size: 14px; color: #0E1A0A;">A properly built website with on-page SEO, correct metadata, fast load times, and structured data gives Google everything it needs to understand and rank your business. AEO (Answer Engine Optimization) takes this further — ensuring AI tools like ChatGPT and Perplexity can also recommend you.</p>
    </div>

    <hr style="border: none; border-top: 1px solid #EBE8DD; margin: 32px 0;" />

    <h2 style="font-size: 20px; font-style: italic; font-weight: 300; color: #C8F048; background: #0E1A0A; padding: 16px 20px; border-radius: 8px;">Sign 02 — Your Website Does Not Work on Mobile</h2>
    <p style="font-size: 15px; line-height: 1.7; color: #6B7560; margin-top: 16px;">
      More than 60% of web traffic comes from mobile devices. If your website is difficult to navigate, slow to load, or visually broken on a phone, you are losing more than half your potential clients before they even read a word of your copy. Google also uses mobile performance as a ranking signal — meaning a poor mobile experience hurts your visibility too.
    </p>
    <div style="background: #F5F3EC; border-left: 3px solid #C8F048; padding: 16px 20px; margin-top: 16px; border-radius: 0 8px 8px 0;">
      <strong style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #6B7560;">The Fix</strong>
      <p style="margin: 8px 0 0; font-size: 14px; color: #0E1A0A;">Every Webik Corp website is designed mobile-first — meaning we design for the smallest screen first and scale up. Fast load times, responsive layouts, and touch-friendly navigation are not optional features. They are the baseline.</p>
    </div>

    <hr style="border: none; border-top: 1px solid #EBE8DD; margin: 32px 0;" />

    <h2 style="font-size: 20px; font-style: italic; font-weight: 300; color: #C8F048; background: #0E1A0A; padding: 16px 20px; border-radius: 8px;">Sign 03 — Visitors Leave Without Doing Anything</h2>
    <p style="font-size: 15px; line-height: 1.7; color: #6B7560; margin-top: 16px;">
      High bounce rates are a signal that something is broken — either the design, the messaging, or the call to action. If people land on your site and leave without calling, filling out a form, or clicking anywhere, your website is failing its most basic job: converting interest into action.
    </p>
    <div style="background: #F5F3EC; border-left: 3px solid #C8F048; padding: 16px 20px; margin-top: 16px; border-radius: 0 8px 8px 0;">
      <strong style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #6B7560;">The Fix</strong>
      <p style="margin: 8px 0 0; font-size: 14px; color: #0E1A0A;">Conversion-focused design starts with understanding what you want visitors to do, then making that action obvious, easy, and compelling. Clear headlines, strong calls to action, logical page flow, and fast load times all reduce friction and increase conversions.</p>
    </div>

    <hr style="border: none; border-top: 1px solid #EBE8DD; margin: 32px 0;" />

    <h2 style="font-size: 20px; font-style: italic; font-weight: 300; color: #C8F048; background: #0E1A0A; padding: 16px 20px; border-radius: 8px;">Sign 04 — Your Website Looks Like It Was Built a Decade Ago</h2>
    <p style="font-size: 15px; line-height: 1.7; color: #6B7560; margin-top: 16px;">
      Design is credibility. An outdated website tells visitors — whether consciously or not — that you are behind. That you are not invested in your own business. That the product or service they are about to buy might be as neglected as the website they are standing on. Design sets expectations before a single word is read.
    </p>
    <div style="background: #F5F3EC; border-left: 3px solid #C8F048; padding: 16px 20px; margin-top: 16px; border-radius: 0 8px 8px 0;">
      <strong style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #6B7560;">The Fix</strong>
      <p style="margin: 8px 0 0; font-size: 14px; color: #0E1A0A;">A modern, professionally designed website does not need to be expensive. It needs to be intentional. Clean typography, a clear visual hierarchy, consistent branding, and quality imagery are what separate a website that builds trust from one that destroys it.</p>
    </div>

    <hr style="border: none; border-top: 1px solid #EBE8DD; margin: 32px 0;" />

    <h2 style="font-size: 20px; font-style: italic; font-weight: 300; color: #C8F048; background: #0E1A0A; padding: 16px 20px; border-radius: 8px;">Sign 05 — Your Entire Digital Presence Lives on Social Media</h2>
    <p style="font-size: 15px; line-height: 1.7; color: #6B7560; margin-top: 16px;">
      A Facebook page with thousands of followers is not a digital presence. It is a tenant arrangement. You are building an audience on land you do not own — and the landlord (Meta, Instagram, TikTok) can change the rules, limit your reach, or suspend your account at any time, for any reason. When that happens, years of effort disappear overnight.
    </p>
    <div style="background: #F5F3EC; border-left: 3px solid #C8F048; padding: 16px 20px; margin-top: 16px; border-radius: 0 8px 8px 0;">
      <strong style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #6B7560;">The Fix</strong>
      <p style="margin: 8px 0 0; font-size: 14px; color: #0E1A0A;">Use social media as a channel, not a foundation. Your website — something you own — should be the hub. Social platforms point traffic back to it. That is how you build a digital presence that compounds over time instead of one that can be taken from you.</p>
    </div>

    <hr style="border: none; border-top: 1px solid #EBE8DD; margin: 32px 0;" />

    <div style="background: #0E1A0A; padding: 32px; border-radius: 12px; text-align: center;">
      <h3 style="color: #C8F048; font-style: italic; font-weight: 300; font-size: 22px; margin: 0 0 12px;">What to Do Next</h3>
      <p style="color: rgba(245,243,236,0.7); font-size: 14px; line-height: 1.6; margin: 0 0 20px;">
        If any of these five signs sound familiar, the good news is they are all fixable. And you do not need to solve all of them at once.
        The first step is a free discovery call — no pitch, no pressure. Just an honest conversation about where your business is and what it needs.
      </p>
      <a href="https://webikdigital.com/contact" style="display: inline-block; background: #C8F048; color: #0E1A0A; padding: 14px 32px; border-radius: 50px; font-family: sans-serif; font-size: 14px; font-weight: 600; text-decoration: none;">
        See What We Can Do Together
      </a>
    </div>

    <p style="text-align: center; font-family: monospace; font-size: 11px; color: #6B7560; margin-top: 32px; text-transform: uppercase; letter-spacing: 0.15em;">
      Webik Corp · webikdigital.com · Cebu, Philippines · SEC-Registered
    </p>
  </div>
</div>
`;

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email } = await req.json();

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    // Save lead to entity
    await base44.asServiceRole.entities.LeadCapture.create({
      email,
      name: name || '',
      source: '5-signs-guide',
    });

    // Send guide via email
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: email,
      from_name: 'Webik Corp',
      subject: 'Your Free Guide: 5 Signs Your Website Is Losing You Clients',
      body: guideContent,
    });

    // Notify Pryce of new lead
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: 'pryce@webikdigital.com',
      from_name: 'Webik Lead Capture',
      subject: `New lead magnet download: ${email}`,
      body: `New guide download:\n\nName: ${name || 'Not provided'}\nEmail: ${email}\nSource: 5-signs-guide\n\nThis lead has been saved to the LeadCapture entity.`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});