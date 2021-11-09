const { response, request } = require('express');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config').JWT;

const validateJwt = (req = request, res = response, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(constants.BAD_REQUEST_ERROR).json({
      msg: messages.NO_TOKEN
    });
  }
  try {
    const { user } = jwt.verify(token, secretKey);
    req.user = user;
    next();
  } catch (error) {
    return res.status(constants.NOK_USER_CREDENTIALS).json({
      error,
      msg: messages.INVALID_TOKEN
    });
  }
};

module.exports = validateJwt;
