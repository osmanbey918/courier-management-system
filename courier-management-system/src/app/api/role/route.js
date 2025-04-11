// app/api/me/route.js
import { verifyToken } from "@/lib/jwt/jwt";
import { NextResponse } from "next/server";

export async function GET(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) return NextResponse.json({ role: null }, { status: 401 });

  try {
    const user = verifyToken(token);
    return NextResponse.json({ role: user.role }, { status: 200 });
  } catch {
    return NextResponse.json({ role: null }, { status: 401 });
  }
}

// our main focus is you said that when any page refresh the token in localstoarge become empty now i want if the localstoarge  become epmty the req a auto made to api/me for role setting in local