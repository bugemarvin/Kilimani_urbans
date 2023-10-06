const express = require('express');
const router = express.Router();
const { getWeatherData } = require('../controllers/intergrationController');

/**
 * @method GET
 * @route /api_v1/weather
 * @description Get weather data
 * @access Public
 */

router.get('/status', getWeatherData);

module.exports = router;
