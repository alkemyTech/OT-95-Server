const validateFields = require('./validate-fields');
const { check } = require('express-validator');

module.exports = {
  validateCreation: [
    check('name', 'Name is required').notEmpty(),
    check('name', 'Name must be a string').isString(),
    validateFields
  ]
};
