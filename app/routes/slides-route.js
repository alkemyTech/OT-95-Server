const express = require('express');
const slidesController = require('../controllers/slides-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const validateJwt = require('../middlewares/validate-jwt');
const { validateCreation, existSlide } = require('../middlewares/slides-middleware');

const router = express.Router();

router.post('/', [validateJwt, isAdmin, ...validateCreation], slidesController.create);

router.get('/', [validateJwt, isAdmin], slidesController.getAll);

router.get('/:id', [validateJwt, isAdmin], slidesController.getById);

router.put('/:id', [validateJwt, isAdmin, ...existSlide], slidesController.update);

router.delete('/:id', [validateJwt, isAdmin, ...existSlide], slidesController.destroy);

module.exports = router;
