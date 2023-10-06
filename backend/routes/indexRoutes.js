const express = require('express');
const router = express.Router();

/**
 * @method GET
 * @route /
 * @description Get all routes
 * @access Public
 */

router.get('/', (req, res) => {
  res.send('Welcome to Urban Data API');
});

module.exports = router;
