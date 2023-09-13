const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const app = express();

require('dotenv').config();

const userRoutes = require('../app/routes/userRoutes');
const agentCommissionRoutes = require('../app/routes/agentCommissionRoutes');

app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./passport')(passport);

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/agent-commissions', agentCommissionRoutes);

module.exports = app;