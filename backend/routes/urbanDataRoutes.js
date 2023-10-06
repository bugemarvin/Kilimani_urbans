const express = require('express');
const router = express.Router();
const urbanDataController = require('../controllers/urbanDataController');
const { isAuthenticated } = require('../middleware/authMiddleware');

/**
 * @route POST api/urbanData/create
 * @route GET api/urbanData/getAll
 * @route GET api/urbanData/:id
 * @route PUT api/urbanData/:id
 * @route DELETE api/urbanData/:id
 * @description Create a new urbanData entry
 * @access Private
 */
router.post('/create', urbanDataController.createUrbanData);
router.get('/getAll', isAuthenticated, urbanDataController.getAllUrbanData);
router.get('/:id', urbanDataController.getUrbanDataById);
router.put('/:id', urbanDataController.updateUrbanData);
router.delete('/:id', isAuthenticated, urbanDataController.deleteUrbanData);

module.exports = router;
