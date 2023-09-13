const mongoose = require('mongoose');

const { Schema: { Types: { ObjectId } } } = mongoose;

// Define the user schema
const agentSchema = new mongoose.Schema({
    commsPercent: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    datetime: {
        type: Date,
        required: true,
        default: Date.now()
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    maxAllowedBet: {
        type: Number,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sponsorId: {
        type: ObjectId,
        // required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    walletBalance: {
        type: Number,
        required: true
    }
});

// Create and export the user model
module.exports = mongoose.model('agents', agentSchema);