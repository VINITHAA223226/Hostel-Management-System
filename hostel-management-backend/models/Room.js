const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roll_number: { type: String, required: true, unique: true }, // Unique to each student
    name: { type: String, required: true },
    password: { type: String, required: true }, // Assuming this is for authentication
    hostel_block: { type: String, required: true }, // The block where the room is located
    allocated_warden: { type: String, required: true }, // The name of the assigned warden
    createdAt: { type: Date, default: Date.now },
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
