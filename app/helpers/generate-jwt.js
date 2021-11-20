const jwt = require('jsonwebtoken');
const messages = require('../constants/messages');
const { secretKey } = require('../config/config').JWT;

const generateJwt = (user) => {
  return new Promise((resolve, reject) => {
    const payload = { user };
    jwt.sign(payload, secretKey, {
      expiresIn: '24h'
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
