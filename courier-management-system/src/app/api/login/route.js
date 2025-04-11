// app/api/login/route.js
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { signToken } from '@/lib/jwt/jwt';

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  const users = [
    { email: "admin@admin.com", password: "123456", role: "admin" },
    { email: "staff@test.com", password: "123456", role: "staff" },
    { email: "delivery@test.com", password: "123456", role: "delivery" },
  ];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({ email: user.email, role: user.role });

  const response = NextResponse.json({ role: user.role }, { status: 200 });

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
