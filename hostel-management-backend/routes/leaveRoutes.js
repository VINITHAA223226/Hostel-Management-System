const express = require('express');
const { createLeave, getLeaves } = require('../controllers/leaveController');

const router = express.Router();

// Route to create a new leave request
router.post('/create', createLeave);

// Route to get all leave requests
router.get('/', getLeaves);

module.exports = router;
