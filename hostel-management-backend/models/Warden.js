const mongoose = require('mongoose');

const wardenSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Name of the warden
    email: { type: String, required: true, unique: true }, // Email of the warden
    password: { type: String, required: true }, // Hashed password for authentication
    contact_number: { type: String, required: true }, // Contact number of the warden
    hostel: { type: String, required: true }, // The hostel assigned to the warden
    createdAt: { type: Date, default: Date.now }, // Date of record creation
});

const Warden = mongoose.model('Warden', wardenSchema);
module.exports = Warden;
