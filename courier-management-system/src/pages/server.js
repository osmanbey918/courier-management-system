require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db.js");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
connectDB(); // Connect to MongoDB

// Simple route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Dummy data for parcels
const parcels = [
  { id: "123", status: "In Transit", location: "New York" },
  { id: "456", status: "Delivered", location: "Los Angeles" },
  { id: "789", status: "Pending", location: "Chicago" },
];

// Track parcel route
app.get("/api/track-parcel/:id", (req, res) => {
  const parcelId = req.params.id;
  const parcel = parcels.find((p) => p.id === parcelId);

  if (parcel) {
    res.json(parcel);
  } else {
    res.status(404).json({ message: "Parcel not found" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
