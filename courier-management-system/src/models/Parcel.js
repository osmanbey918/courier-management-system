const mongoose = require('mongoose');

const parcelSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    status: { type: String, required: true },
    location: { type: String, required: true },
});

module.exports = mongoose.model('Parcel', parcelSchema);
