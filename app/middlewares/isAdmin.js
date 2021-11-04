const { getOne } = require('../repositories/users-repository');
const messages = require('../constants/messages');
const statusCodes = require('../constants/constants');

module.exports = {
  isAdmin: (req, res, next) => {
    const [user] = getOne(req.user.id);
    return user.roleId === 0 ? next() :
      res.status(statusCodes.FORBIDDEN).json({ message: messages.FORBIDDEN });
  }
};
