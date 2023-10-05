const { mongoose } = require('./config/db');

const analyticsDataSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  analyticsData: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

const analyticsData = mongoose.model('AnalyticsData', analyticsDataSchema);

module.exports = analyticsData;
