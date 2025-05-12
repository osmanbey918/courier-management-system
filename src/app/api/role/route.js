import { jwtVerify } from 'jose';
export async function GET(req) {
    const verify = async (token) => {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        return payload
    }
    const token = req.cookies.get("token")?.value;
    const data = await verify(token)
    // console.log(data.role);
    // localStorage.setItem("user", JSON.stringify(data))
    return new Response(JSON.stringify({
        role: data.role,
        branchCode: data.code // or data.branchCode if that's the actual key
    }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });

}