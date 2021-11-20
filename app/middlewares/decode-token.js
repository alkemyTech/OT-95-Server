const constants = require('../constants/constants');
const messages = require('../constants/messages');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config').JWT;

const decodeTokn = (req, res) => {
  let token = req.header('Authorization');

  if (!token) {
    res.status(constants.BAD_REQUEST_ERROR).json({
      msg: messages.NO_TOKEN
    });
  }

  try {
    token = (token.split('Bearer '))[1];
    const decoded = jwt.verify(token, secretKey);
    res.status(constants.RESPONSE_OK).send(decoded);
  } catch (err) {
    res.status(constants.NOK_USER_CREDENTIALS).json(messages.INVALID_TOKEN);
  }
};

module.exports = decodeTokn;
