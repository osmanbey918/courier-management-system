import mongoose from "mongoose";

const BranchStaffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    contact: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      min: 18, // optional: basic validation
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    role: {
      type: String,
      enum: ["Staff Member", "Delivery Boy"],
      required: true,
    },

    branch: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BranchStaff = mongoose.models.BranchStaff || mongoose.model("BranchStaff", BranchStaffSchema);

export default BranchStaff;
