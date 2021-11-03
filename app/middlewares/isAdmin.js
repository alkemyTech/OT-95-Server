const { getById } = require('../repositories/users-repository');
const messages = require('../constants/messages');
const statusCodes = require('../constants/constants');

module.exports = {
  isAdmin: (req, res, next) => {
    const { id } = req.user;
    const { roleId } = getById(id);

    if (roleId === 0) {
      next();
    } else {
      res.status(statusCodes.FORBIDDEN).json(messages.FORBIDDEN);
    }
  },
};
