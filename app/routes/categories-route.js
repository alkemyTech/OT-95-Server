const express = require('express');

const router = express.Router();
const categoriesController = require('../controllers/categories-controller');
const { validateCreate } = require('../middlewares/categories-middleware');

// GET all categories by name.
router.get('/', categoriesController.getAll);

router.post('/', validateCreate, categoriesController.create);

module.exports = router;
