const express = require('express');

const router = express.Router();
const categoriesController = require('../controllers/categories-controller');

// GET all categories by name.
router.get('/', categoriesController.getAll);

module.exports = router;
