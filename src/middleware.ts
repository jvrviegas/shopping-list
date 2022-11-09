import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req });

  // Authenticate the API Route
  if (!token && pathname.includes('api')) {
    return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
  }

  // Authenticate the application pages
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/categories/:path*'],
};
