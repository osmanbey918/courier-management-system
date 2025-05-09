import connectDB from '@/lib/db';
import Parcel from '@/models/Parcel';


export async function GET(req) {
  await connectDB();


  const parcels = await Parcel.find();
  console.log(parcels);

  return Response.json(parcels);
    }