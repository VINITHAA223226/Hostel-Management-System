const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roll_number: { type: String, unique: true, required: true },
    course: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
