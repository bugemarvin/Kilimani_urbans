const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const { config } = require('dotenv');

// Load environment variables from .env file
config();

const app = express();
const PORT = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DATABASE = 'kilimani-urban-data';
// const REDIS_PORT = process.env.REDIS_PORT || 6379;

// Enable CORS
const corsOptions = {
  origin: process.env.HOST
    ? `http://${host}:${PORT}` || `https://${host}:${PORT}`
    : '*',
  credentials: true
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Initialize Passport.js
require('./config/passport')(passport);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
