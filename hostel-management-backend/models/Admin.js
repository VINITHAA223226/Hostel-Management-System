const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'superadmin'], default: 'admin' }, // You can add more roles if needed
    createdAt: { type: Date, default: Date.now },
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
