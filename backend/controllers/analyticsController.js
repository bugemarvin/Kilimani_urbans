const AnalyticsData = require('../models/analyticsData');

// Get analytics data with pagination
exports.getAnalyticsData = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;

    const skip = (page - 1) * pageSize;

    // Use aggregation to count total documents efficiently
    const [totalCount, analyticsData] = await Promise.all([
      AnalyticsData.countDocuments(),
      AnalyticsData.find()
        .skip(skip)
        .limit(pageSize)
        .exec()
    ]);

    const totalPages = Math.ceil(totalCount / pageSize);

    res.status(200).json({
      totalPages,
      currentPage: page,
      analyticsData
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
