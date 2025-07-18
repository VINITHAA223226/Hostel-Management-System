// backend/controllers/userController.js
const Student = require('../models/Student');
const Warden = require('../models/Warden');
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

// Login function to check all roles
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check in Student collection
        let user = await Student.findOne({ email });
        let role = 'Student';

        // If not found in Student, check Warden
        if (!user) {
            user = await Warden.findOne({ email });
            role = 'Warden';
        }

        // If not found in Warden, check Admin
        if (!user) {
            user = await Admin.findOne({ email });
            role = 'Admin';
        }

        // If user not found in any collection, return error
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // User authenticated successfully
        res.status(200).json({ message: 'Login successful', user, role });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

module.exports = { loginUser };
