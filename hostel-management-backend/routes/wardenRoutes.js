const express = require('express');
const { createWarden, getWardens } = require('../controllers/wardenController');

const router = express.Router();

router.post('/create', createWarden);
router.get('/', getWardens);

module.exports = router;
 
