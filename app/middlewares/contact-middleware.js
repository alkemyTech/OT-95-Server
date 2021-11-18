const { check } = require('express-validator');
const validateFields = require('../middlewares/validate-fields');

module.exports = {
  contactCreate: [
    check('name', 'required').notEmpty(),
    check('email', 'required').notEmpty().bail(),
    check('email', 'invalid email').isEmail(),
    check('phone', 'invalid phone').optional().isLength({ min: 8, max: 11 }),
    validateFields
  ]
};
