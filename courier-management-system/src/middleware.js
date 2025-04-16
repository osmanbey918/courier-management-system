import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

async function verifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const { payload } = await jwtVerify(token, secret);
  return payload; // decoded JWT payload
}

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.clone();
  const path = url.pathname;

  // 🚫 No token — redirect to /unauthorized
  if (!token) {
    console.log("No token found");
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  try {
    const data = await verifyToken(token);
    const role = data.role;

    console.log('User role:', role);

    // 🔒 Role-based route protection
    if (path.startsWith('/dashboard/admin') && role !== 'admin') {
      url.pathname = '/unauthorized';
      return NextResponse.redirect(url);
    }

    if (path.startsWith('/dashboard/staff') && role !== 'staff') {
      url.pathname = '/unauthorized';
      return NextResponse.redirect(url);
    }

    if (path.startsWith('/dashboard/delivery') && role !== 'delivery' && role !== 'admin') {
      url.pathname = '/unauthorized';
      return NextResponse.redirect(url);
    }

    // ✅ Allow if authenticated & authorized
    return NextResponse.next();

  } catch (err) {
    console.log("Token verification failed:", err);
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*', // Protect all /dashboard routes
    '/add-staff',     // Protect all /admin routes
    '/branch-list',     // Protect all /staff routes
    '/new-branch' ,
    '/staff-list',
    '/parcel/:path*',

  ],
};
