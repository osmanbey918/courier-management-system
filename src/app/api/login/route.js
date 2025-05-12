// app/api/login/route.js
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { signToken } from '@/lib/jwt/jwt';

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  const users = [
    { email: "admin@admin.com", password: "123456", role: "admin", code: "admin" },
    { email: "branch001@test.com", password: "123456", role: "staff", code: "branch001" },
    { email: "branch002@test.com", password: "123456", role: "staff", code: "branch002" },
    { email: "branch003@test.com", password: "123456", role: "staff", code: "branch003" },
    { email: "delivery001@test.com", password: "123456", role: "delivery", code: "delivery001" },
    { email: "delivery001@test.com", password: "123456", role: "delivery", code: "delivery002" },
  ];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({ email: user.email, role: user.role, code: user.code });
  console.log("Token:", token); // For debugging

  const response = NextResponse.json({ role: user.role, code: user.code }, { status: 200 });

  // Set cookie manually
  response.headers.set(
    'Set-Cookie',
    serialize("token", token, {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    })
  );
  return response;
}
