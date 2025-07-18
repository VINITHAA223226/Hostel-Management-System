const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const adminRoutes = require('./routes/adminRoutes');
const studentRoutes = require('./routes/studentRoutes');
const wardenRoutes = require('./routes/wardenRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const roomRoutes = require('./routes/roomRoutes');
const feeRoutes = require('./routes/feeRoutes');
const leaveRoutes = require('./routes/leaveRoutes');
const complaintRoutes = require('./routes/complaintRoutes');
const userRoutes = require('./routes/UserRoutes');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('MongoDB URI:', process.env.MONGO_URI);

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/admin', adminRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/warden', wardenRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/room', roomRoutes);
app.use('/api/fees', feeRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/complaints', complaintRoutes);

// Mail-sending route
app.post('/api/send-mail', async (req, res) => {
    const { email, message } = req.body;

    if (!email || !message) {
        return res.status(400).json({ error: 'Email and message are required.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your email service provider
            auth: {
                user: process.env.EMAIL, // Your email from environment variables
                pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Message from Hostel Management System',
            text: message,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Mail sent successfully!' });
    } catch (error) {
        console.error('Error sending mail:', error);
        res.status(500).json({ error: 'Failed to send mail. Please try again.' });
    }
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
