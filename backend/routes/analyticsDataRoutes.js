const express = require('express');
const router = express.Router();
const analyticsDataController = require('../controllers/analyticsDataController');

/**
 * @swagger
 * /api_v1/analytics:
 * @method: get
 * get:
 * summary: Displays analytics data
 * description: Displays analytics data
 * responses:
 * '201':
 * description: Analytics data successfully retrieved.
 * '400':
 * description: Error retrieving analytics data.
 */

router.get('/analytics', analyticsDataController.getAnalyticsData);

module.exports = router;
