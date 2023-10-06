const Discussion = require('../models/discussion');

// Create a new discussion topic
exports.createDiscussion = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const newDiscussion = new Discussion({ title, content, userId });
    const discussion = await newDiscussion.save();
    res.status(201).json(discussion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all discussion topics
exports.getAllDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find();
    res.status(200).json(discussions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
