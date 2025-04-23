import connectDB from '@/lib/db';
import Branch from '@/models/Branch';

export async function POST(req) {
  console.log('✅ We received a request');
  try {
    await connectDB();
    const data = await req.json();
    console.log("📦 Received data:", data);

    const { branchName, email, street, city, state, zipcode, country, contact, password, branchCode } = data;

    // Validate required fields
    if (!street || !city || !state || !zipcode || !country || !contact || !branchCode || !password || !branchName) {
      console.log("❌ Missing required fields");
      return new Response(JSON.stringify({ message: "All fields are required" }), {
        status: 400,
      });
    }

    // Create new branch
    const newBranch = await Branch.create({
      branchName,
      email,
      street,
      city,
      state,
      zipcode,
      country,
      contact,
      password,
      branchCode,
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
    // console.log("📦 All branches:", branches);
    return Response.json(branches || []);

  } catch (error) {
    console.error("❌ Error fetching branches:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function DELETE(req) {
  try {
    await connectDB(); // Ensure DB is connected

    const id = await req.json().then(data => data.id); // Extract ID from request body
    console.log("Deleting Branch with ID:", id); // Log the ID being deleted

    if (!id) {
      return new Response(JSON.stringify({ message: "ID is required" }), {
        status: 400,
      });
    }

    const deletedBranch = await Branch.findOneAndDelete({ _id: id });

    if (!deletedBranch) {
      return new Response(JSON.stringify({ message: "Branch not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: "Branch deleted successfully" }), {
      status: 200,
    });
  }
  catch (error) {
    console.error("❌ Error deleting Branch:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}