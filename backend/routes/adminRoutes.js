const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminDashboardController');
const { isAuthenticated } = require('../middleware/authMiddleware');

/**
 * @swagger
 * /api_v1/admin/user-accounts:
 *   post:
 *     summary: Displays all user accounts
 *     description: Displays adimstrator user accounts
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User accounts successfully retrieved.
 *       '400':
 *         description: Error retrieving user accounts.
 */

router.get('/user-accounts', isAuthenticated, adminController.getUserAccounts);

/**
 * @swagger
 * /api_v1/admin/reported-content:
 *   post:
 *     summary: Displays all reported content
 *     description: Displays all reported content
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *               properties:
 *                userId:
 *                 type: string
 *      responses:
 *      '201':
 *       description: Reported content successfully retrieved.
 *     '400':
 *      description: Error retrieving reported content.
 */
router.get('/reported-content', isAuthenticated, adminController.getReportedContent);

module.exports = router;
