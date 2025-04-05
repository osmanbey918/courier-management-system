import connectDB from '@/lib/db';
import Branch from '@/models/Branch';

export async function POST(req) {
    console.log('✅ We received a request');
    try {
        await connectDB();
        const data = await req.json();
        console.log("📦 Received data:", data);

        const { street, city, state, zipcode, country, contact } = data;

        // Validate required fields
        if (!street || !city || !state || !zipcode || !country || !contact) {
            return new Response(JSON.stringify({ message: "All fields are required" }), {
                status: 400,
            });
        }

        // Create new branch
        const newBranch = await Branch.create({
            street,
            city,
            state,
            zipcode,
            country,
            contact,
        });

        console.log("✅ Branch created:", newBranch);
        return new Response(JSON.stringify({ message: "Branch created successfully", branch: newBranch }), {
            status: 201,
        });
    } catch (error) {
        console.error("❌ Error creating Branch:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
        });
    }
}

export async function GET() {
    try {
        await connectDB();
        const branches = await Branch.find({});
        console.log("📦 All branches:", branches);
        return Response.json(branches || []);

    } catch (error) {
        console.error("❌ Error fetching branches:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
        });
    }
}