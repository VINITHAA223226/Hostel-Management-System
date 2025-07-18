const mongoose = require('mongoose');

const feesSchema = new mongoose.Schema({
    student_name: { type: String, required: true },
    roll_number: { type: String, required: true },
    hostel_block: { type: String, required: true },
    fees_paid: { type: Number, required: true, default: 0 },
    due_fees: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

const Fees = mongoose.model('Fees', feesSchema);
module.exports = Fees;
