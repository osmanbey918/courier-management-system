const connectDB = require('../config/db').connectDB;
const Parcel = require('../../models/Parcel');

module.exports = async function handler(req, res) {
    try {
        await connectDB(); // Ensure the database is connected
        const parcelId = req.query.id; // Get the parcel ID from the query

        const parcel = await Parcel.findOne({ id: parcelId }); // Fetch parcel from DB
        if (parcel) {
            res.json(parcel);
        } else {
            res.status(404).json({ message: "Parcel not found" });
        }
    } catch (error) {
        console.error("❌ Error fetching parcel:", error); // Log the error
        res.status(500).json({ message: "Internal server error" });
    }
};
