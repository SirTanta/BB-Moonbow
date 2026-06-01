import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Prevent indexing of API routes
  if (req.nextUrl.pathname.startsWith('/api/')) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');

    // Reject non-JSON POST bodies to API routes
    if (req.method === 'POST') {
      const contentType = req.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) {
        return NextResponse.json({ ok: false, error: 'Unsupported Media Type.' }, { status: 415 });
      }
    }
  }

  return res;
}

export const config = {
  matcher: ['/api/:path*'],
};
