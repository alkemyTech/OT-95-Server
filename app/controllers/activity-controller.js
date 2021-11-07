const statusCode = require("../constants/constants");
const responseMessage = require("../constants/messages");
const {
  create,
  getAll,
  getById,
  remove,
  update,
} = require("../services/activity-service");

module.exports = {
  getAll: async (req, res) => {
    try {
      const response = await getAll();

      response.length > 0
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
  getById: async (req, res) => {
    try {
      const id = req.params.id;

      const response = await getById(id);

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
  create: async (req, res) => {
    try {
      const activity = req.body;

      const response = await create(activity);

      response
        ? res
            .status(statusCode.RESPONSE_OK_CREATED)
            .json(responseMessage.RESPONSE_OK_CREATED)
        : res
            .status(statusCode.BAD_REQUEST_ERROR)
            .json(responseMessage.BAD_REQUEST_ERROR);
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

      response
        ? res.status(statusCode.RESPONSE_OK_UPDATED).json(response)
        : res
            .status(statusCode.NOT_FOUND_ERROR)
            .json(responseMessage.NOT_FOUND_ERROR);
    } catch (error) {
      res
        .status(statusCode.INTERNAL_ERROR)
        .json(responseMessage.INTERNAL_ERROR);
    }
  },
  remove: async (req, res) => {
    try {
      const id = req.params.id;
      const response = await remove(id);

      response === 0
        ? res.status(statusCode.RESPONSE_OK).json(responseMessage.RESPONSE_OK)
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
