const mongoose = require('mongoose');

const geoLocationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  geoLocation: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

geoLocationSchema.index({ geoLocation: '2dsphere' });

const GeoLocation = mongoose.model('GeoLocation', geoLocationSchema);

module.exports = GeoLocation;
