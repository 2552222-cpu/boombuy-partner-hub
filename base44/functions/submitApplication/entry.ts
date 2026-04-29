import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
  const base44 = createClientFromRequest(req);
  const body = await req.json();
  const { org, contact, role, email, phone, size, sector } = body;

  // Save to DB
  const record = await base44.asServiceRole.entities.Application.create({
    org, contact, role, email, phone, size, sector, status: 'new'
  });

  // Notify admins
  const notifyEmails = ['ari@boombuy.co.il', 'uriel@boombuy.co.il'];
  const emailBody = `
<div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb;">
  <div style="background: white; border-radius: 12px; padding: 32px; border: 1px solid #e5e7eb;">
    <h2 style="color: #1D1D1F; margin-bottom: 16px; border-bottom: 2px solid #2563eb; padding-bottom: 12px;">📋 ליד חדש — נבחרת ה-100</h2>
    <table style="width:100%; border-collapse: collapse;">
      <tr style="background:#f5f5f7;"><td style="padding:10px 14px;font-weight:bold;color:#555;border-bottom:1px solid #e5e7eb;">ארגון</td><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;">${org}</td></tr>
      <tr><td style="padding:10px 14px;font-weight:bold;color:#555;border-bottom:1px solid #e5e7eb;">איש קשר</td><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;">${contact}</td></tr>
      <tr style="background:#f5f5f7;"><td style="padding:10px 14px;font-weight:bold;color:#555;border-bottom:1px solid #e5e7eb;">תפקיד</td><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;">${role || '—'}</td></tr>
      <tr><td style="padding:10px 14px;font-weight:bold;color:#555;border-bottom:1px solid #e5e7eb;">מייל</td><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td></tr>
      <tr style="background:#f5f5f7;"><td style="padding:10px 14px;font-weight:bold;color:#555;border-bottom:1px solid #e5e7eb;">טלפון</td><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;">${phone || '—'}</td></tr>
      <tr><td style="padding:10px 14px;font-weight:bold;color:#555;border-bottom:1px solid #e5e7eb;">גודל</td><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;">${size || '—'}</td></tr>
      <tr style="background:#f5f5f7;"><td style="padding:10px 14px;font-weight:bold;color:#555;">מגזר</td><td style="padding:10px 14px;">${sector || '—'}</td></tr>
    </table>
    <div style="margin-top:20px;padding:14px;background:#eff6ff;border-radius:8px;border-right:4px solid #2563eb;">
      <p style="margin:0;color:#1e40af;font-weight:bold;">BoomBuy × HRUS — מחקר לאומי 2026</p>
    </div>
  </div>
</div>`;

  for (const to of notifyEmails) {
    try {
      await base44.asServiceRole.integrations.Core.SendEmail({
        to,
        subject: `ליד חדש: ${org} — נבחרת ה-100`,
        body: emailBody
      });
    } catch (_) { /* ignore if user not registered */ }
  }

  return Response.json({ success: true, id: record.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});