const e = require('express');
const News = require('../models/news');

// Create a new news article
exports.createNewsArticle = (req, res) => {
  const { title, content, author } = req.body;
  const newNewsArticle = new News({ title, content, author });

  newNewsArticle.save((err, article) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(201).json(article);
  });
};

// Get all news articles
exports.getAllNewsArticles = (req, res) => {
  News.find({}, (err, articles) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(articles);
  });
};

// Mark news article as read
exports.markNewsAsRead = (req, res) => {
  const { newsId } = req.params;
  News.updateMany({ newsId, isRead: false }, { isRead: true }, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json({ message: 'News marked as read' });
  });
};
