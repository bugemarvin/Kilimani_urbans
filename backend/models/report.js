const { mongoose } = require('./config/db');

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

const reports = mongose.model('Report', reportSchema);

exports.module = reports;
