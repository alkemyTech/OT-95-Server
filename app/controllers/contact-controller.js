const statusCode = require('../constants/constants');
const responseMessage = require('../constants/messages');
const { getAll, create } = require('../services/contact-service');

module.exports = {
  getAll: async (req, res) => {
    try {
      const contacts = await getAll();
      if (contacts.length > 0) {
        res.status(statusCode.RESPONSE_OK).json({ data: contacts });
      } else {
        res
          .status(statusCode.RESPONSE_OK_NO_CONTENT)
          .json({ message: responseMessage.RESPONSE_OK_NO_CONTENT });
      }
    } catch (error) {
      res
        .status(statusCode.INTERNAL_ERROR)
        .json(responseMessage.INTERNAL_ERROR);
    }
  },

  create: async (req, res) => {
    try {
      const contact = await create(req.body);

      res.status(statusCode.RESPONSE_OK_CREATED)
      .json({ message: responseMessage.RESPONSE_OK_CREATED, data: contact });
    } catch (err) {
      res.status(statusCode.INTERNAL_ERROR).json({ message: responseMessage.INTERNAL_ERROR });
    }
  }
};
