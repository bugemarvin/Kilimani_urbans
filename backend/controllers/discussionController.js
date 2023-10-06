const Discussion = require('../models/discussion');

const discussions = {

  // Create a new discussion topic
  createDiscussion: async (req, res) => {
    try {
      const { title, content, userId } = req.body;
      const newDiscussion = new Discussion({ title, content, userId });
      const discussion = await newDiscussion.save();
      if (!newDiscussion || newDiscussion === null || newDiscussion === undefined) {
        return res.status(404).json({ error: 'please enter a comment' });
      }
      res.status(201).json(discussion);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  // Get all discussion topics
  getAllDiscussions: async (req, res) => {
    try {
      const discussions = await Discussion.find();
      if (!discussions || discussions === null || discussions === undefined) {
        return res.status(404).json({ error: 'Discussion not found' });
      }
      res.status(200).json(discussions);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  // Get a discussion topic by id
  getDiscussionById: async (req, res) => {
    try {
      const discussion = await Discussion.findById(req.params.id);
      if (!discussion || discussion === null || discussion === undefined) {
        return res.status(404).json({ error: 'Discussion not found' });
      }
      res.status(200).json(discussion);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = { discussions };
