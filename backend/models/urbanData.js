const { mongoose } = require('./config/db');

const urbanDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number]
    }
  },
  description: String,
  image: String,
  link: String,
  status: {
    type: String,
    enum: ['populated', 'unpopulated', 'under construction', 'abandoned', 'other'],
    default: 'populated'
  },
  type: {
    type: String,
    enum: ['Residential', 'Commercial', 'Mixed-use', 'Industrial', 'Road', 'Land', 'Railway', 'Waterway', 'Airway', 'Other'],
    default: 'Residential'
  },
  activity: {
    enum: ['Active', 'Inactive'],
    default: 'Active'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: Date,
  updatedAt: Date
});

const UrbanData = mongoose.model('UrbanData', urbanDataSchema);

module.exports = UrbanData;
