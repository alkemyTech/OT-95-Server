const express = require('express');

const router = express.Router();

const controller = require('../controllers/testimonials-controller');

const validateTestimonials = require('../middlewares/testimonials-create');
const validatorFields = require('../middlewares/validate-fields');

router
    .get('/', controller.all)
    .post('/', validateTestimonials, validatorFields, controller.create)
    .get('/:id', controller.getById)
    .put('/:id', controller.update)
    .delete('/:id', controller.destroy);

module.exports = router;
