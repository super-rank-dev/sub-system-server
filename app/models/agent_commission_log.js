const mongoose = require('mongoose');

const { Schema: { Types: { ObjectId } } } = mongoose;

// Define the user schema
const agentCommissionLog = new mongoose.Schema({
    agentId: {
        type: ObjectId,
        required: true,
        ref: 'agents'
    },
    gameNumber: {
        type: ObjectId,
        required: true
    },
    playerId: {
        type: ObjectId,
        required: true
    },
    playerUsername: {
        type: ObjectId,
        required: true
    },
    bet: {
        type: ObjectId,
        required: true
    },
    betAmount: {
        type: Number,
        required: true
    },
    gameResult: {
        type: ObjectId,
        required: true
    },
    betOutcome: {
        type: String,
        required: true
    },
    commissionPercent: {
        type: ObjectId,
        required: true
    },
    commissionAmount: {
        type: Number,
        required: true
    },
    remarks: {
        type: String,
        required: true
    },
    datetime: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

// Create and export the user model
module.exports = mongoose.model('agent_commission_logs', agentCommissionLog);