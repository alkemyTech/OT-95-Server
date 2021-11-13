const messages = require('../constants/messages');
const statusCodes = require('../constants/constants');

module.exports = {
  matchUser: (req, res, next) => {
    const id = req.params.id;
    console.log(req)
    return req.user.id === id ? next() :
      res.status(statusCodes.BAD_REQUEST_ERROR).json({ message: messages.NO_MATCH_USER });
  }
};