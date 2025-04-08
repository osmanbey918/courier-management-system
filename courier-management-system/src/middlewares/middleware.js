import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const user = JSON.parse(atob(token.split(".")[1])); // decode token payload
  const path = req.nextUrl.pathname;

  // Example route protections
  if (path.startsWith("/dashboard/admin") && user.role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (path.startsWith("/dashboard/staff") && user.role !== "staff") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (path.startsWith("/dashboard/delivery") && user.role !== "delivery") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protect all dashboard routes
};
