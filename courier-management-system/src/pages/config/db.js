const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Ensure dotenv is imported

dotenv.config(); // Load environment variables

let isConnected = false; // Track the connection status

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error("❌ MONGO_URI is not defined in the environment variables");
    }

    if (isConnected) {
        console.log("✅ MongoDB is already connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        isConnected = db.connections[0].readyState === 1;
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        throw new Error("Database connection failed");
    }
};

const seedParcels = async () => {
    try {
        const Parcel = require('../../models/Parcel'); // Ensure the Parcel model is imported correctly
        const parcels = [
            { id: "123", status: "In Transit", location: "New York" },
            { id: "456", status: "Delivered", location: "Los Angeles" },
            { id: "789", status: "Pending", location: "Chicago" },
        ];

        await Parcel.deleteMany(); // Clear existing data
        await Parcel.insertMany(parcels); // Seed new data
        console.log("✅ Parcel data seeded successfully");
    } catch (error) {
        console.error("❌ Failed to seed parcel data:", error);
    }
};

module.exports = { connectDB, seedParcels };
