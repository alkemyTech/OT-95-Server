const { check } = require('express-validator');
const validateFields = require('./validate-fields');

module.exports = {
  validateCreate: (req, res, next) => {
    check('name', 'name is required.').notEmpty().isString();
    check('content', 'content is required').notEmpty().isString();

    validateFields;
  },
};
