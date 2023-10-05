const mongose = require('mongoose');

const newsSchema = new mongose.Schema({
  news: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const news = mongose.model('News', newsSchema);

module.exports = news;
