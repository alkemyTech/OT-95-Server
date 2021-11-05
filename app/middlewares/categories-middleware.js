const { check } = require('express-validator');
const validateFields = require('./validate-fields');


module.exports = {
  validateCreate: [
    check('name').notEmpty().isString(),
    check('description').optional().isString(),
    check('image').optional().isString(),
    validateFields
  ],
};
