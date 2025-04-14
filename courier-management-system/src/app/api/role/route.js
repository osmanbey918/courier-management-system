
import { jwtVerify } from 'jose';

export async function GET(req) {
    const token = req.cookies.get("token")?.value;
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return Response.json(payload) // returns decoded payload
}