const { response, request } = require('express');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const jwt = require('jsonwebtoken');

const validateJwt = (req = request, res = response, next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(constants.BAD_REQUEST_ERROR).json({
      msg: messages.NO_TOKEN
    });
  }
  try {
    const prueba = jwt.verify(token, constants.SECRETORPRIVATEKEY);
    console.log(prueba)
    next();
  } catch (error) {
    return res.status(constants.NOK_USER_CREDENTIALS).json({
      error,
      msg: messages.INVALID_TOKEN
    });
  }
};

module.exports = validateJwt;
