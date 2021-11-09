const express = require('express');

const router = express.Router();
const controller = require('../controllers/testimonials-controller');
const validateTestimonials = require('../middlewares/testimonials-middlewares');
const { isAdmin } = require('../middlewares/isAdmin');
const validateToken = require('../middlewares/validate-jwt');

router.route('/')
    .get(controller.all)
    .post(validateToken, isAdmin, validateTestimonials, controller.create);

router.route('/:id')
    .get(controller.getById)
    .put(validateToken, isAdmin, controller.update)
    .delete(validateToken, isAdmin, controller.destroy);

module.exports = router;
