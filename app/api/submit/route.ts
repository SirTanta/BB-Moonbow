import { NextRequest, NextResponse } from 'next/server';
import { SECTIONS } from '@/lib/questions';

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function formatEmailHtml(answers: Record<string, unknown>, submittedAt: string): string {
  let html = `<h1 style="font-family:Georgia,serif;color:#2C1810;">Swell Realty — Questionnaire Submission</h1>`;
  html += `<p style="font-family:Georgia,serif;color:#7A5C3A;"><strong>Submitted:</strong> ${submittedAt}</p>`;
  for (const section of SECTIONS) {
    html += `<h2 style="font-family:Georgia,serif;color:#6E1A1A;border-bottom:1px solid #B08D57;padding-bottom:6px;margin-top:32px;">${section.title}</h2>`;
    for (const q of section.questions) {
      const val = answers[q.id];
      if (!val || (Array.isArray(val) && val.length === 0)) continue;
      const display = Array.isArray(val) ? val.join(', ') : String(val);
      html += `<div style="margin-bottom:16px;"><p style="font-family:Georgia,serif;font-weight:bold;color:#2C1810;margin:0 0 4px;">${q.label}</p><p style="font-family:Georgia,serif;color:#3A3A3A;margin:0;white-space:pre-wrap;">${display}</p></div>`;
    }
  }
  return html;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { answers, submittedAt } = body as { answers: Record<string, unknown>; submittedAt: string };

    const name = (answers['preferred_name'] as string) || (answers['legal_name'] as string) || 'client';
    const filename = `responses/${slugify(name)}-${Date.now()}.json`;

    const payload = {
      answers,
      submittedAt,
      name,
    };

    const token = process.env.GITHUB_TOKEN;
    const repo = 'SirTanta/BB-Moonbow';

    const res = await fetch(`https://api.github.com/repos/${repo}/contents/${filename}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json',
      },
      body: JSON.stringify({
        message: `Questionnaire response — ${name} (${submittedAt})`,
        content: Buffer.from(JSON.stringify(payload, null, 2)).toString('base64'),
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('GitHub commit error:', err);
      return NextResponse.json({ ok: false, error: 'Failed to save response.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Submit error:', err);
    return NextResponse.json({ ok: false, error: 'Failed to submit.' }, { status: 500 });
  }
}
