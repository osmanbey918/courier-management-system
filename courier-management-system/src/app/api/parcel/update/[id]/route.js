import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Parcel from '@/models/Parcel';

export async function POST(request, { params }) {
  await dbConnect();
  const { id } = params;
  try {
    const { status, location, updatedBy } = await request.json();
    if (!status || !location || !updatedBy) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const parcel = await Parcel.findOne({ id });
    if (!parcel) {
      return NextResponse.json({ error: 'Parcel not found.' }, { status: 404 });
    }
    // Update main status and location
    parcel.status = status;
    parcel.location = location;
    // Push to statusHistory
    parcel.statusHistory.push({
      status,
      location,
      updatedBy,
      timestamp: new Date()
    });
    await parcel.save();
    return NextResponse.json({ success: true, parcel });
  } catch (error) {
    console.error('Parcel update error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
