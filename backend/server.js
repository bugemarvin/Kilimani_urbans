const express = require('express');
const { connectDB } = require('./config/db');
const cors = require('cors');
const { config } = require('dotenv');
const { configureRedis } = require('./config/redis');
const passport = require('passport');
const { passport: configurePassport } = require('./config/passport');

// Load environment variables from .env file
config();

const app = express();

const PORT = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';

// Enable CORS
const corsOptions = {
  origin: process.env.HOST
    ? `http://${host}:${PORT}` || `https://${host}:${PORT}`
    : '*',
  credentials: true
};

app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Configure Redis for session storage
configureRedis(app);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport
configurePassport(passport);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
