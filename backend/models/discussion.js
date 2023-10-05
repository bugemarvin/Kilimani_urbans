const mongose = require('mongoose');

const discussionSchema = new mongose.Schema({
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

const disscustion = mongose.model('Discussion', discussionSchema);

exports.module = disscustion;
