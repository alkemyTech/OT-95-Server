const statusCode = require('../constants/constants');
const messages = require('../constants/messages');


module.exports = {
  isAuthenticated: (req, res) => {
    const token = req.header('Authorization');
    if (!token) {
      res.status(statusCode.FORBIDDEN).json({ message: messages.FORBIDDEN });
    }
  }
};
