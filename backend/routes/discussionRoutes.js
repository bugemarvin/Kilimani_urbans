const express = require('express');
const router = express.Router();
const { discussions } = require('../controllers/discussionController');
const { isAuthenticated } = require('../middleware/authMiddleware');

/**
 * @method POST
 * @route /api_v1/discussion/create
 * @description Create a new discussion topic
 * @access private (Requires user to be logged in)
 */
router.post('/create', isAuthenticated, discussions.createDiscussion);

/**
 * @method GET
 * @route /api_v1/discussion/status
 * @description Get all discussion topics
 * @access public
 */
router.get('/status', discussions.getAllDiscussions);

/**
 * @method GET
 * @route /api_v1/discussion/status/:id
 * @description Get a discussion topic by id
 * @access public
 */
router.get('/status/:id', discussions.getDiscussionById);

module.exports = router;
