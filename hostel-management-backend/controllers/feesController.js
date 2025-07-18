const Fees = require('../models/Fees'); // Assuming you have a Fees model

// Create new fee details
exports.createFees = async (req, res) => {
    const { roll_number, student_name, fees_paid, due_fees } = req.body;
    try {
        const newFees = await Fees.create({ roll_number, student_name, fees_paid, due_fees });
        res.status(201).json(newFees);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all fee details
exports.getFees = async (req, res) => {
    try {
        const feesDetails = await Fees.find();
        res.status(200).json(feesDetails);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
