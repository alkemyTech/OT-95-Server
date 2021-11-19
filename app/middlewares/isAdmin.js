const messages = require('../constants/messages');
const statusCodes = require('../constants/constants');

module.exports = {
  isAdmin: (req, res, next) => {
    try {
      return req.user.roleId === 1 ? next() :
      res.status(statusCodes.FORBIDDEN).json({ message: messages.FORBIDDEN });
    } catch (error) {
      res.status(statusCodes.FORBIDDEN).json({ message: messages.FORBIDDEN });
    }
  }
};
