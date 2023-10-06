const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  discussion: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const disscustion = mongoose.model('Discussion', discussionSchema);

module.exports = disscustion;
