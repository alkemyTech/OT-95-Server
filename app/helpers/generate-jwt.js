const jwt = require('jsonwebtoken');
const constants = require('../constants/constants');
const messages = require('../constants/messages');

const generateJwt = (user) => {
  return new Promise((resolve, reject) => {
    const payload = { user };
    jwt.sign(payload, constants.SECRETORPRIVATEKEY, {
      expiresIn: 60 * 60
    }, (err, token) => {
      if (err) {
        reject(messages.TOKEN_NOT_GENERATED);
      } else {
        resolve(token);
      }
    });
  });
};


module.exports = {
  generateJwt
};
