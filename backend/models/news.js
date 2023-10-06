const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  news: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const news = mongoose.model('News', newsSchema);

module.exports = news;
