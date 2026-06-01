import { NextRequest, NextResponse } from 'next/server';
import { SECTIONS } from '@/lib/questions';

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

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Submit error:', err);
    return NextResponse.json({ ok: false, error: 'Failed to submit.' }, { status: 500 });
  }
}
