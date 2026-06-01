import { NextRequest, NextResponse } from 'next/server';
import { SECTIONS } from '@/lib/questions';

function escHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function commitToGitHub(path: string, content: string, message: string) {
  const token = process.env.GITHUB_TOKEN;
  const repo = 'SirTanta/BB-Moonbow';

  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github+json',
    },
    body: JSON.stringify({ message, content }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub API error: ${err}`);
  }
  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { answers, submittedAt } = body as {
      answers: Record<string, unknown>;
      submittedAt: string;
    };

    const name = (answers['preferred_name'] as string) || (answers['legal_name'] as string) || 'client';
    const slug = `${slugify(name)}-${Date.now()}`;

    // Extract logo file before storing answers
    type FileUpload = { name: string; type: string; size: number; data: string; mimeType: string };
    const logoFile = answers['logo_file'] as FileUpload | undefined;
    const answersToStore = { ...answers };

    if (logoFile?.data) {
      const ext = logoFile.name.split('.').pop() ?? 'png';
      const logoPath = `responses/${slug}-logo.${ext}`;
      await commitToGitHub(logoPath, logoFile.data, `Logo upload — ${name}`);
      answersToStore['logo_file'] = { uploaded: true, filename: `${slug}-logo.${ext}`, originalName: logoFile.name };
    } else {
      delete answersToStore['logo_file'];
    }

    // Commit the response JSON
    const payload = { answers: answersToStore, submittedAt, name };
    const jsonContent = Buffer.from(JSON.stringify(payload, null, 2)).toString('base64');
    await commitToGitHub(
      `responses/${slug}.json`,
      jsonContent,
      `Questionnaire response — ${name} (${submittedAt})`
    );

    // Send email notification via Composio Gmail
    if (process.env.COMPOSIO_SDK_KEY) {
      const labelMap: Record<string, string> = {};
      for (const section of SECTIONS) {
        for (const q of section.questions) {
          labelMap[q.id] = q.label;
        }
      }

      const rows = Object.entries(answersToStore)
        .filter(([, v]) => v !== undefined && v !== '' && v !== null)
        .map(([k, v]) => {
          const label = labelMap[k] ?? k;
          const display = Array.isArray(v) ? v.join(', ') : typeof v === 'object' ? JSON.stringify(v) : String(v);
          return `<tr><td style="padding:4px 8px;font-weight:600;vertical-align:top;white-space:nowrap">${escHtml(label)}</td><td style="padding:4px 8px">${escHtml(display)}</td></tr>`;
        })
        .join('');

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
            subject: `Questionnaire submitted — ${name.replace(/[\r\n]/g, ' ').trim()}`,
            body: `<p>New submission from <strong>${escHtml(name)}</strong> at ${escHtml(submittedAt)}.</p><table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table>`,
          },
        }),
      }).catch(err => console.error('Composio email error:', err));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Submit error:', err);
    return NextResponse.json({ ok: false, error: 'Failed to submit.' }, { status: 500 });
  }
}
