import mongoose from 'mongoose';

// Create Schema
const parcelSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true, // Ensure the ID is unique
    },
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'In Transit', 'Delivered'], // Limit status to these options
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Export the model
const Parcel = mongoose.models.Parcel || mongoose.model('Parcel', parcelSchema);
export default Parcel;
