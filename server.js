const app = require('./config/app');
const connectDB = require('./config/database');
const { serverPort } = require('./config/key');

// Connect to the database
connectDB();

const port = process.env.PORT || serverPort;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});