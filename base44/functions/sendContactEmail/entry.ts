import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, phone, message } = await req.json();

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: 'pryce@webikdigital.com',
      from_name: 'Webik Contact Form',
      subject: `New enquiry from ${name}`,
      body: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});