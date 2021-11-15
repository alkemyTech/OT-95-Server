const validateFields = require('./validate-fields');
const { check } = require('express-validator');
const { Slide } = require('../models');

const assignOrder = async (req, res, next) => {
  if (req.body.order) {
    return next();
  }
  const slides = await Slide.findAll({ order: [['order', 'DESC']] });
  if (slides.length === 0) {
    req.body.order = 1;
    return next();
  }
  const order = slides[0].order + 1;
  req.body.order = order;
  return next();
};

module.exports = {
  validateCreation: [
    check('text', 'Text is required').notEmpty(),
    check('text', 'Text must be a string').isString(),
    check('imageUrl', 'Image is required').notEmpty(),
    check('organizationId', 'Organiazrion Id is required').notEmpty(),
    assignOrder,
    validateFields
  ],
};
