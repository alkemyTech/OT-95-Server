const messages = require('../constants/messages');
const statusCode = require('../constants/constants');

module.exports = {
  isAuthenticated: (req, res) => {
    const token = req.header('Authorization');
    if (!token) {
      res.status(statusCode.FORBIDDEN).json({ message: messages.FORBIDDEN });
    }
  }
};
