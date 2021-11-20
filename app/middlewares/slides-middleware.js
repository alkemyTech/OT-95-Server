const validateFields = require('./validate-fields');
const { check } = require('express-validator');
const slideRepository = require('../repositories/slides-repository');

const assignOrder = async (req, res, next) => {
  if (req.body.order) {
    const slide = await slideRepository.getByOrder(req.body.order);
    if (slide) {
      const slides = await slideRepository.getAll({ order: [['order', 'DESC']] });
      const order = slides[0].order + 1;
      req.body.order = order;
      return next();
    }
    return next();
  }
  const slides = await slideRepository.getAll({ order: [['order', 'DESC']] });
  if (slides.length === 0) {
    req.body.order = 1;
    return next();
  }
  const order = slides[0].order + 1;
  req.body.order = order;
  return next();
};

const existSlideById = async (id) => {
  const slide = await slideRepository.getById(id);
  if (!slide) {
    throw new Error(`Slide with id ${id} does not exist`);
  }
};

module.exports = {
  validateCreation: [
    assignOrder,
    check('text', 'Text is required').notEmpty(),
    check('text', 'Text must be a string').isString(),
    check('imageUrl', 'Image is required').notEmpty(),
    check('order', 'Order must be a number (string)').isNumeric(),
    check('organizationId', 'OrganizationId is required').notEmpty(),
    check('organizationId', 'OrganizationId must be a number').isNumeric(),
    validateFields
  ],
  existSlide: [
    check('id').custom(existSlideById),
    validateFields
  ]
};
