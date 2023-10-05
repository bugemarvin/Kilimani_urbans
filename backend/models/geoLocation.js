const mongose = require('mongoose');

const geoLocationSchema = new mongose.Schema({
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

const geo = mongose.model('GeoLocation', geoLocationSchema);

module.exports = geo;
