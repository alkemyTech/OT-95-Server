const express = require('express');

const router = express.Router();

const controller = require('../controllers/testimonials-controller');

const validateTestimonials = require('../middlewares/testimonials-middlewares');

router.route('/')
    .get(controller.all)
    .post(validateTestimonials, controller.create);

router.route('/:id')
    .get(controller.getById)
    .put(controller.update)
    .delete(controller.destroy);

module.exports = router;
