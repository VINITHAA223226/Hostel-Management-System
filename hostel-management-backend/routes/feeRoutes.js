const express = require('express');
const { createFees, getFees } = require('../controllers/feesController');

const router = express.Router();

// Route to create new fee details
router.post('/create', createFees);

// Route to get all fee details
router.get('/', getFees);

module.exports = router;
