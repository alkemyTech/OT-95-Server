const express = require('express');

const router = express.Router();
const categoriesController = require('../controllers/categories-controller');
const { validateCreate, validateUpdate } = require('../middlewares/categories-middleware');
const validateJWT = require('../middlewares/validate-jwt');
const { isAdmin } = require('../middlewares/isAdmin');

// GET all categories by name.
router.get('/', validateJWT, isAdmin, categoriesController.getAll);

router.post('/', validateJWT, isAdmin, validateCreate, categoriesController.create);

router.patch('/:id', validateJWT, isAdmin, validateUpdate, categoriesController.update);

module.exports = router;
