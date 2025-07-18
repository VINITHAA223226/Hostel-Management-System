const Attendance = require('../models/Attendance');

exports.markAttendance = async (req, res) => {
    const { studentId, date, status } = req.body;
    try {
        const attendanceRecord = await Attendance.create({ studentId, date, status });
        res.status(201).json(attendanceRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAttendance = async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find().populate('studentId');
        res.status(200).json(attendanceRecords);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
 
