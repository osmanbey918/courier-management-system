import { NextResponse } from 'next/server';

export function roleMiddleware(request) {
  const token = request.cookies.get('token')?.value;
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token format');
    }

    const payload = parts[1];
    const decoded = JSON.parse(atob(payload));

    const role = decoded.role;
    const pathname = request.nextUrl.pathname;

    // Role-based route checks
    if (pathname.startsWith('/dashboard/admin') && role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    if (pathname.startsWith('/dashboard/staff') && role !== 'staff') {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    if (pathname.startsWith('/dashboard/delivery') && role !== 'delivery') {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    return NextResponse.next(); // All good
  } catch (err) {
    console.error('❌ Invalid token:', err);
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }
}
