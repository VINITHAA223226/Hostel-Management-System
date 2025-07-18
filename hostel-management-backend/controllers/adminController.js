const Admin = require('../models/Admin');

exports.createAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newAdmin = await Admin.create({ name, email, password });
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

