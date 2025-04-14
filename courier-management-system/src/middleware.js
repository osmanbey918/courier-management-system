// middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req) {
  async function verifyToken(token) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload; // returns decoded payload
  }
  const token = req.cookies.get("token")?.value;
  // No token at all — redirect to unauthorized
  if (!token) {
    console.log("no token");
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }
  const data = await verifyToken(token);
  const role = data.role;
  const url = req.nextUrl.clone();
  const path = req.nextUrl.pathname;

  console.log('role', role);

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
