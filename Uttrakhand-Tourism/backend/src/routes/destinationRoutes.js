const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

router.get('/', destinationController.getAllDestinations);
router.get('/search', destinationController.searchDestinations);
router.get('/featured', destinationController.getFeaturedDestinations);
router.get('/:slug', destinationController.getDestinationBySlug);

module.exports = router;
