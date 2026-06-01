// Contact API route — same Composio Gmail pattern as app/api/submit/route.ts
// Sends inquiry to jedwards@tanta-holdings.com

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body as {
      name: string;
      email: string;
      phone?: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
    }

    // Send via Composio Gmail — same pattern as submit/route.ts
    if (process.env.COMPOSIO_SDK_KEY) {
      const htmlBody = `
        <div style="font-family: Georgia, serif; font-size: 15px; color: #2c1810; max-width: 600px;">
          <h2 style="font-size: 1.4rem; font-weight: 400; border-bottom: 1px solid #b08d57; padding-bottom: 12px; margin-bottom: 20px;">
            Swell Realty — New Inquiry
          </h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; width: 100px; vertical-align: top; color: #7a5c3a;">Name</td>
              <td style="padding: 8px 12px;">${name}</td>
            </tr>
            <tr style="background: rgba(176,141,87,0.06);">
              <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; color: #7a5c3a;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; color: #7a5c3a;">Phone</td>
              <td style="padding: 8px 12px;">${phone || '—'}</td>
            </tr>
            <tr style="background: rgba(176,141,87,0.06);">
              <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; color: #7a5c3a;">Message</td>
              <td style="padding: 8px 12px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `;

      await fetch('https://backend.composio.dev/api/v2/actions/GMAIL_SEND_EMAIL/execute', {
        method: 'POST',
        headers: {
          'X-API-Key': process.env.COMPOSIO_SDK_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          connectedAccountId: 'gmail_fitter-payoff',
          input: {
            recipient_email: 'jedwards@tanta-holdings.com',
            subject: `Swell Realty Inquiry — ${name}`,
            body: htmlBody,
          },
        }),
      }).catch(err => console.error('Composio contact email error:', err));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ ok: false, error: 'Failed to send message.' }, { status: 500 });
  }
}
