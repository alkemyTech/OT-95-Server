const constants = require('../constants/constants');
const messages = require('../constants/messages');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config').JWT;

const validateJwt = (req, res, next) => {
  let token = req.header('Authorization');

  if (token) {
    try {
      token = (token.split('Bearer '))[1];
      const { user } = jwt.verify(token, secretKey);
      req.user = user;
      next();
    } catch (error) {
      res.status(constants.NOK_USER_CREDENTIALS).json({
        error,
        message: messages.INVALID_TOKEN
      });
    }
  } else {
    res.status(constants.BAD_REQUEST_ERROR).json({
      message: messages.NO_TOKEN
    });
  }
};

module.exports = validateJwt;
