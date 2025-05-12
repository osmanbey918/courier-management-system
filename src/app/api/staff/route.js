import connectDB from "@/lib/db";
import Staff from "@/models/Staff";

export async function POST(req) {
    try {
        await connectDB(); // Ensure DB is connected
        const data = await req.json();
        const { name, email, contact, role, branch, age, gender } = data;
        console.log("📦 Received data:", data);
        const res = await Staff.create({ name, email, contact, role, branch, age, gender });
        console.log("✅ Staff created:", res);
        return new Response(JSON.stringify({ message: "staff created successfully", staff: res }), {
            status: 201,
        });

    } catch (error) {
        console.error("❌ Error creating staff:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
        });
    }
}

export async function GET(req) {
    try {
        await connectDB(); // Ensure DB is connected
        const res = await Staff.find({});
        console.log("📦 All staff:", res);
        return Response.json(res || []);

    } catch (error) {
        console.error("❌ Error fetching staff:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
        });
    }
}