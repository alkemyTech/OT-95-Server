const { check } = require('express-validator');
const validateFields = require('../middlewares/validate-fields');

module.exports = {
  registerValidate: [
    check('email', 'email is required').notEmpty(),
    check('email', 'you must enter a valid email').isEmail(),
    check('firstName', 'firstName is required').notEmpty(),
    check('lastName', 'lastName is required').notEmpty(),
    check('password', 'password is required').notEmpty(),
    validateFields
  ],

  loginValidate: [
    check('email', 'email is required').notEmpty(),
    check('password', 'password is required').notEmpty(),
    validateFields
  ]
};
