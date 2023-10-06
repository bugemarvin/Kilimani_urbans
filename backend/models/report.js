const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
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

const reports = mongoose.model('Report', reportSchema);

exports.module = reports;
