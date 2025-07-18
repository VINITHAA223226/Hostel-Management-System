const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    complaint_id: { type: Number, required: true },
    student_name: { type: String, required: true },
    roll_number: { type: String, required: true },
    hostel_block: { type: String, required: true },
    complaint_description: { type: String, required: true },
    status: { type: String, required: true, enum: ['Pending', 'Resolved', 'In Progress'] },
    createdAt: { type: Date, default: Date.now },
});

const Complaint = mongoose.model('Complaint', complaintSchema);
module.exports = Complaint;
