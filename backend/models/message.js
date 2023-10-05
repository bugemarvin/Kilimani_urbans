const mongose = require('mongoose');

const messageSchema = new mongose.Schema({
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

const msg = mongose.model('Message', messageSchema);

module.exports = msg;
