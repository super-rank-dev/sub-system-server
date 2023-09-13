// Load AgentCommissionLog model
const AgentCommissionLog = require('../models/agent_commission_log');

// @route   GET api/agent-commissions/
// @desc    Get Transactions
// @access  Public
exports.getTransactions = async (req, res) => {
    const commissions = await AgentCommissionLog.find();
    res.json(commissions);
}

// @route   GET api/agent-commissions/by-date
// @desc    Get Transactions By Date
// @access  Public
exports.getTransactionsByDate = async (req, res) => {

    const { startDate, endDate } = req.body;

    const commissions = await AgentCommissionLog.find({
        datetime: {
            $gte: startDate,
            $lte: endDate
        }
    });
    res.json(commissions);
}