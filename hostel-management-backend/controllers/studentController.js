const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
    const { name, rollNumber, email, password, hostel, year } = req.body;
    try {
        const newStudent = await Student.create({ name, rollNumber, email, password, hostel, year });
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
