import connectDB from '@/lib/db';
import Parcel from '@/models/Parcel';

// GET: /api/parcel?id=123 or just /api/parcel
export async function GET(req) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
        const parcel = await Parcel.findOne({ id });
        return Response.json(parcel || {});
    }

    const parcels = await Parcel.find();
    return Response.json(parcels);
}

export async function POST(req) {
    try {
      await connectDB(); // Ensure DB is connected
  
      console.log("hel");
      const data = await req.json();
      const { id, status, location } = data;
  
      if (!id || !status || !location) {
        return new Response(JSON.stringify({ message: "All fields are required" }), {
          status: 400,
        });
      }
      
      const newParcel = await Parcel.create({ id, status, location });
  
      return new Response(JSON.stringify({ message: "Parcel created successfully", parcel: newParcel }), {
        status: 201,
      });
    } catch (error) {
      console.error("❌ Error creating parcel:", error);
      return new Response(JSON.stringify({ message: "Internal Server Error" }), {
        status: 500,
      });
    }
  }