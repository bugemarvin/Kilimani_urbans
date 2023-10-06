const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminDashboardController');
const { isAuthenticated } = require('../middleware/authMiddleware');

router.get('/dashboard', isAuthenticated, adminController.getDashboard);
router.get('/user-accounts', isAuthenticated, adminController.getUserAccounts);
router.get('/reported-content', isAuthenticated, adminController.getReportedContent);

module.exports = router;
