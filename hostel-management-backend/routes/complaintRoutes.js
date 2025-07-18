const express = require('express');
const { createComplaint, getComplaints } = require('../controllers/complaintController');

const router = express.Router();

// Route to create a new complaint
router.post('/create', createComplaint);

// Route to get all complaints
router.get('/', getComplaints);

module.exports = router;
