const express = require('express');

const router = express.Router();

const controller = require('../controllers/testimonials-controller');

const validateTestimonials = require('../middlewares/testimonials-create');
const validatorFields = require('../middlewares/validate-fields');

router
  .post('/', validateTestimonials, validatorFields, controller.create);


module.exports = router;
