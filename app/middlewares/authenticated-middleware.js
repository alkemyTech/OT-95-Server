const messages = require('../constants/messages');
const codeStatus = require('../constants/constants');

module.exports = {
  isAuthenticated: (req, res) => {
    const token = req.header('Authorization');
    if (!token) {
      res.status(codeStatus.FORBIDDEN).json({ message: messages.FORBIDDEN });
    }
  }
};
