const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    roll_number: { type: String, required: true },
    name: { type: String, required: true },
    leave_type: { type: String, enum: ['General Permission', 'Special Permission', 'OD', 'Internal OD', 'Sick Leave', 'Emergency Leave'], required: true },
    leave_start_date: { type: Date, required: true },
    leave_end_date: { type: Date, required: true },
    status: { type: String, enum: ['Approved', 'Pending', 'Rejected'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now },
});

const Leave = mongoose.model('Leave', leaveSchema);
module.exports = Leave;
