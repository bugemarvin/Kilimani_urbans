const { mongoose } = require('./config/db');

const messageSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  message: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const msg = mongoose.model('Message', messageSchema);

module.exports = msg;
