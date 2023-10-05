const { mongoose } = require('./config/db');

const geoLocationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  geoLocation: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const geo = mongoose.model('GeoLocation', geoLocationSchema);

module.exports = geo;
