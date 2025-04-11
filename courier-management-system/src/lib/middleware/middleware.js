import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.clone();

  if (!token) {
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }
console.log(" i am working bnice");

  try {
    const decoded = verifyToken(token);
    const role = decoded.role;
    const path = req.nextUrl.pathname;

    if (path.startsWith("/dashboard") && role !== "admin") {
      url.pathname = "/unauthorized";
      return NextResponse.redirect(url);
    }

    if (path.startsWith("/dashboard/staff") && role !== "staff") {
      url.pathname = "/unauthorized";
      return NextResponse.redirect(url);
    }

    if (path.startsWith("/dashboard/delivery") && role !== "delivery") {
      url.pathname = "/unauthorized";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (err) {
    console.error("JWT Error:", err);
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
