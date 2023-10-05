const mongose = require('mongoose');

const reportSchema = new mongose.Schema({
  userId: {
    type: String,
    required: true
  },
  report: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const reports = mongose.model('Report', reportSchema);

exports.module = reports;
