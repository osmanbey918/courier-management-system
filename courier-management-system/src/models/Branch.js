import mongoose from 'mongoose';
const branchSchema = new mongoose.Schema(
    {
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zipcode: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        branchCode: {
            type: Number,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

const Branch = mongoose.models.Branch || mongoose.model('Branch', branchSchema);
export default Branch;
