import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_PATHS = ['/', '/login', '/register', '/api/auth'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token =
    req.cookies.get('next-auth.session-token') ||
    req.cookies.get('__Secure-next-auth.session-token');

  // If user is logged in and tries to access public paths including '/'
  if (
    token &&
    PUBLIC_PATHS.some((path) => pathname === path || pathname.startsWith(path))
  ) {
    const role = req.cookies.get('role')?.value || 'user';
    if (role === 'admin') {
      return NextResponse.redirect(new URL('/admin', req.url));
    }
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // If user is NOT logged in and tries to access private routes
  if (
    !token &&
    !PUBLIC_PATHS.some((path) => pathname === path || pathname.startsWith(path))
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Protect admin pages
  if (pathname.startsWith('/admin')) {
    const role = req.cookies.get('role')?.value || 'user';
    if (role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/register', '/dashboard/:path*', '/admin/:path*'],
};
