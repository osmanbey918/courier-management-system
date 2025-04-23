import connectDB from '@/lib/db';
import Parcel from '@/models/Parcel';
import { v4 as uuidv4 } from 'uuid';

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
  console.log(parcels);

  return Response.json(parcels);
}

export async function POST(req) {
  try {
    await connectDB(); // Ensure DB is connected

    const data = await req.json();
    const { status, location, weight, height, width, length, senderName, receiverName, deliveryDate, branch } = data;
    console.log("Creating new parcel with data:", data); // Log the incoming data
    if (!status || !location || !weight || !height || !width || !length || !branch || !senderName || !receiverName || !deliveryDate) {
      return new Response(JSON.stringify({ message: "All fields are required" }), {
        status: 400,
      });
    }

    const id = Math.floor(1000 + Math.random() * 9000); // Generate random code
    const newParcel = await Parcel.create({
      id,
      status,
      location,
      weight,
      height,
      width,
      length,
      branch,
      senderName,
      receiverName,
      deliveryDate,
    });

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

export async function DELETE(req) {
  try {
    await connectDB(); // Ensure DB is connected

    const id = await req.json().then(data => data.id); // Extract ID from request body
    console.log("Deleting parcel with ID:", id); // Log the ID being deleted

    if (!id) {
      return new Response(JSON.stringify({ message: "ID is required" }), {
        status: 400,
      });
    }

    const deletedParcel = await Parcel.findOneAndDelete({ id });

    if (!deletedParcel) {
      return new Response(JSON.stringify({ message: "Parcel not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: "Parcel deleted successfully" }), {
      status: 200,
    });
  }
  catch (error) {
    console.error("❌ Error deleting parcel:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
