const mongoose = require('mongoose');
const { config } = require('dotenv');

config();

const host = process.env.HOST || 'localhost';
const DATABASE = 'kilimani-urban-data';

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${host}/${DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to db', DATABASE);
});

module.exports = {
  connectDB,
  mongoose
};
