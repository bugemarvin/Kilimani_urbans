const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const { isAuthenticated } = require('../middleware/authMiddleware');

/**
 * @method GET, PUT
 * @route /api/news/:newsId
 * @description Get user news
 * @access Private
 */

router.post('/news', newsController.createNewsArticle);
router.get('/news/:newsId', newsController.getAllNewsArticles);
router.put('/news/:newsId', isAuthenticated, newsController.markNewsAsRead);

module.exports = router;
