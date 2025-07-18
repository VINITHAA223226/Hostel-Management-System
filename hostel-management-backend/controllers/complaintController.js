const Complaint = require('../models/Complaint'); // Assuming you have a Complaint model

// Create a new complaint
exports.createComplaint = async (req, res) => {
    const { complaint_id, student_name, roll_number, hostel_block, complaint_description, status } = req.body;
    try {
        const newComplaint = await Complaint.create({ complaint_id, student_name, roll_number, hostel_block, complaint_description, status });
        res.status(201).json(newComplaint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all complaints
exports.getComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json(complaints);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
