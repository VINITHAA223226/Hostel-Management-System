const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    roll_number: { type: String, required: true },
    attendance: [
        {
            date: { type: String, required: true }, // Consider changing to Date type if necessary
            status: { type: String, required: true, enum: ['present', 'absent'] }
        }
    ],
    createdAt: { type: Date, default: Date.now },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;
