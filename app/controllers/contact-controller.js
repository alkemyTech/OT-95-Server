const statusCode = require('../constants/constants');
const responseMessage = require('../constants/messages');
const { getAll } = require('../services/contact-service');

module.exports = {
  getAll: async (req, res) => {
    try {
      const contacts = await getAll();
      if (contacts.length > 0) {
        res.status(statusCode.RESPONSE_OK).json(contacts);
      } else {
        res
          .status(statusCode.RESPONSE_OK_NO_CONTENT)
          .json(responseMessage.RESPONSE_OK_NO_CONTENT);
      }
    } catch (error) {
      res
        .status(statusCode.INTERNAL_ERROR)
        .json(responseMessage.INTERNAL_ERROR);
    }
  },
};
