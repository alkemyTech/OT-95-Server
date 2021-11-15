const statusCode = require('../constants/constants');
const responseMessage = require('../constants/messages');
const { getAll } = require('../services/contact-service');

module.exports = {
  getAll: async (req, res) => {
    try {
      const response = await getAll();

      response
        ? res.status(statusCode.RESPONSE_OK).json(response)
        : res
            .status(statusCode.NOT_FOUND_ERROR)
            .json(responseMessage.NOT_FOUND_ERROR);
    } catch (error) {
      res
        .status(statusCode.INTERNAL_ERROR)
        .json(responseMessage.INTERNAL_ERROR);
    }
  },
};
