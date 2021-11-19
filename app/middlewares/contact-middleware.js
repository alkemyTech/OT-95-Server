const { check } = require('express-validator');
const validateFields = require('../middlewares/validate-fields');
const helper = require('../helpers/contact-helper');

module.exports = {
  contactCreate: [
    check('name', 'required').notEmpty(),
    check('email', 'required').notEmpty().bail(),
    check('email', 'invalid email').isEmail().bail(),
    check('email', 'invalid email').custom(helper.contactExist),
    check('phone', 'invalid phone').optional().isLength({ min: 8, max: 11 }),
    validateFields
  ]
};
