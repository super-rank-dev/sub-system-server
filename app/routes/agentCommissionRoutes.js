const express = require('express');
const router = express.Router();
const agentCommissionController = require('../controllers/agentCommissionController');

router.get('/', agentCommissionController.getTransactions);
router.post('/by-date', agentCommissionController.getTransactionsByDate);

module.exports = router;