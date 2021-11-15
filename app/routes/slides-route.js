const express = require('express');
const slidesController = require('../controllers/slides-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const validateJwt = require('../middlewares/validate-jwt');
const { validateCreation } = require('../middlewares/slides-middleware');

const router = express.Router();

router.post('/', validateJwt, isAdmin, validateCreation, slidesController.create);

router.get('/', validateJwt, isAdmin, slidesController.getAll);

module.exports = router;
