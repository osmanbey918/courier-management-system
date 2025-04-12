// middleware.js
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const url = req.nextUrl.clone();
  const path = req.nextUrl.pathname;

  // No token at all — redirect to unauthorized
  if (!token) {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  const role = token.role;

  // Route protection
  if (path.startsWith('/dashboard/admin') && role !== 'admin') {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  if (path.startsWith('/dashboard/staff') && role !== 'staff' && role !== 'admin') {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  if (path.startsWith('/dashboard/delivery') && role !== 'delivery' && role !== 'admin') {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
