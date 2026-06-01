import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { SECTIONS } from '@/lib/questions';

function formatAnswers(answers: Record<string, unknown>): string {
  let html = '';
  for (const section of SECTIONS) {
    html += `<h2 style="font-family:Georgia,serif;color:#6E1A1A;border-bottom:1px solid #B08D57;padding-bottom:6px;margin-top:32px;">${section.title}</h2>`;
    for (const q of section.questions) {
      const val = answers[q.id];
      if (!val || (Array.isArray(val) && val.length === 0)) continue;
      const display = Array.isArray(val) ? val.join(', ') : String(val);
      html += `
        <div style="margin-bottom:16px;">
          <p style="font-family:Georgia,serif;font-weight:bold;color:#2C1810;margin:0 0 4px;">${q.label}</p>
          <p style="font-family:Georgia,serif;color:#3A3A3A;margin:0;white-space:pre-wrap;">${display}</p>
        </div>`;
    }
  }
  return html;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { answers, submittedAt } = body as { answers: Record<string, unknown>; submittedAt: string };

    const name = (answers['preferred_name'] as string) || (answers['legal_name'] as string) || 'Your client';

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT ?? '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <!DOCTYPE html>
      <html>
      <body style="background:#F5EDD6;padding:40px 20px;font-family:Georgia,serif;">
        <div style="max-width:680px;margin:0 auto;background:#FCF4E0;border:1px solid #B08D57;padding:40px;box-shadow:0 2px 12px rgba(44,24,16,0.15);">
          <div style="text-align:center;margin-bottom:32px;">
            <p style="color:#B08D57;letter-spacing:0.5em;font-size:12px;margin:0;">✦ ✦ ✦</p>
            <h1 style="font-family:Georgia,serif;color:#2C1810;font-size:28px;margin:12px 0 4px;">Swell Realty</h1>
            <p style="color:#7A5C3A;font-style:italic;margin:0;">Website Questionnaire — Submission</p>
            <p style="color:#B08D57;letter-spacing:0.5em;font-size:12px;margin-top:12px;">✦ ✦ ✦</p>
          </div>
          <p style="color:#2C1810;"><strong>${name}</strong> completed the questionnaire on ${submittedAt}.</p>
          ${formatAnswers(answers)}
          <div style="text-align:center;margin-top:40px;padding-top:20px;border-top:1px solid #B08D57;">
            <p style="color:#7A5C3A;font-style:italic;font-size:13px;">Swell Realty — Website Project</p>
          </div>
        </div>
      </body>
      </html>`;

    await transporter.sendMail({
      from: `"Swell Questionnaire" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFICATION_EMAIL ?? 'jedwards@tanta-holdings.com',
      subject: `Questionnaire submitted — ${name}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Submit error:', err);
    return NextResponse.json({ ok: false, error: 'Failed to send.' }, { status: 500 });
  }
}
