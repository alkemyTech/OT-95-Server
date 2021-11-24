const statusCode = require('../constants/constants');
const responseMessage = require('../constants/messages');
const { create, update } = require('../services/activity-service');

module.exports = {
  create: async (req, res) => {
    try {
      const activity = req.body;

      const response = await create(activity);

      if (response) {
        res.status(statusCode.RESPONSE_OK_CREATED).json({
          message: responseMessage.RESPONSE_OK_CREATED,
          data: response,
        });
      } else {
        res
          .status(statusCode.BAD_REQUEST_ERROR)
          .json(responseMessage.BAD_REQUEST_ERROR);
      }
    } catch (error) {
      res
        .status(statusCode.INTERNAL_ERROR)
        .json(responseMessage.INTERNAL_ERROR);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const activity = req.body;

      const response = await update(id, activity);

      if (response) {
        res.status(statusCode.RESPONSE_OK).json({
          message: responseMessage.RESPONSE_OK_UPDATED,
          data: response,
        });
      } else {
        res
          .status(statusCode.BAD_REQUEST_ERROR)
          .json({ message: responseMessage.BAD_REQUEST_ERROR });
      }
    } catch (error) {
      res
        .status(statusCode.INTERNAL_ERROR)
        .json(responseMessage.INTERNAL_ERROR);
    }
  },
};
