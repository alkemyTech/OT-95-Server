const validateJwt = require('./validate-jwt');
const isAdmin = require('./isAdmin');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
  isOwnerShip: async (req, res, next) => {
    try {
      const id = req.params.id;
      validateJwt(req, res);
      next();
    } catch (err) {
      res.status(codeStatus.NOK_USER_CREDENTIALS).json(messages.UNAUTHORIZED_USER_CREDENTIALS);
    }
  }
};
