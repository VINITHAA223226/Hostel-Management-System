const Leave = require('../models/Leave'); // Assuming you have a Leave model

// Create a new leave request
exports.createLeave = async (req, res) => {
    const { roll_number, name, leave_type, leave_start_date, leave_end_date, status } = req.body;
    try {
        const newLeave = await Leave.create({ roll_number, name, leave_type, leave_start_date, leave_end_date, status });
        res.status(201).json(newLeave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all leave requests
exports.getLeaves = async (req, res) => {
    try {
        const leaves = await Leave.find();
        res.status(200).json(leaves);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
