const constants = require('../constants/constants');
const messages = require('../constants/messages');
const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const decodeTokn = (req = request, res = response) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(constants.BAD_REQUEST_ERROR).json({
      msg: messages.NO_TOKEN
    });
  }

  jwt.verify(token, constants.SECRETORPRIVATEKEY, (err, decoded) => {
    if (err) {
      return res.status(constants.NOK_USER_CREDENTIALS).json({
        err,
        msg: messages.INVALID_TOKEN
      });
    }
    return res.status(constants.RESPONSE_OK).send(decoded);
  });
};

module.exports = decodeTokn;
