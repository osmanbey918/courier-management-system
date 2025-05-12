import jwt from "jsonwebtoken";
import { jwtVerify } from 'jose';
// import { cookies } from "next/headers";
const secret = process.env.JWT_SECRET || "your_secret_key";

export const signToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: "1d" });
}

export async function verifyToken(token) {
  // const token = cookies.get("token")?.value;
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const { payload } = await jwtVerify(token, secret);
  return payload; // returns decoded payload
}  