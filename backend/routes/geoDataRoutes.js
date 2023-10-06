const express = require('express');
const router = express.Router();
const { geoLocation } = require('../controllers/geoDataController');
const { isAuthenticated } = require('../middleware/authMiddleware');

/**
 * @method GET
 * @route /api_v1/geoData
 * @description Get geo data
 * @access Public
 */

router.post('/', isAuthenticated, geoLocation.createGeoLocation);
router.get('/status', geoLocation.getAllGeoLocations);
router.get('/status/:id', isAuthenticated, geoLocation.getGeoLocationById);
router.put('/status/:id', isAuthenticated, geoLocation.updateGeoLocation);
router.delete('/status/:id', isAuthenticated, geoLocation.deleteGeoLocation);

module.exports = router;
