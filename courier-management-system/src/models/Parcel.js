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
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    branch: {
      type: String,
      required: true, // Branch where the parcel is submitted
    },
    senderName: {
      type: String,
      required: true, // Name of the sender
    },
    receiverName: {
      type: String,
      required: true, // Name of the receiver
    },
    deliveryDate: {
      type: Date,
      required: true, // Expected delivery date
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set to current time
    },
    statusHistory: [
      {
        status: { type: String, required: true },
        location: { type: String, required: true },
        updatedBy: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }
      }
    ],
  },
  { timestamps: true }
);

// Export the model
const Parcel = mongoose.models.Parcel || mongoose.model('Parcel', parcelSchema);
export default Parcel;
