const express = require('express');
const router = express.Router();
const { Discussion } = require('../controllers/discussionController');
const { isAuthenitcated } = require('../middleware/authMiddleware');

/**
 * @method GET
 * @route /api_v1/discussion
 * @description Get discussion topics
 * @access Public
 */

router.post('/create', isAuthenitcated, Discussion.createDiscussion);
router.get('/status', Discussion.getAllDiscussions);
router.get('/status/:id', Discussion.getDiscussionById);

module.exports = router;
