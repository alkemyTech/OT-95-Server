'use strict';
const { check } = require('express-validator');
const messages = require('../constants/messages');

module.exports = {

  validateOrgCreateData: [
    check('name', messages.NAME_NOT_FOUND).not().isEmpty(),
    check('image', messages.IMAGE_NOT_FOUND).not().isEmpty(),
    check('email', messages.EMAIL_NOT_FOUND).not().isEmpty(),
    check('email', messages.INVALID_EMAIL).isEmail(),
    check('welcomeText', messages.WELCOME_TEXT_NOT_FOUND).not().isEmpty(),
    check('phone', messages.INVALID_PHONE).isInt()
  ],

  validateOrgPublicUpdate: [
    check('name', messages.NAME_NOT_FOUND).not().isEmpty(),
    check('image', messages.IMAGE_NOT_FOUND).not().isEmpty(),
    check('phone', messages.INVALID_PHONE).isInt()
  ]

};
