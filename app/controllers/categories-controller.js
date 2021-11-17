const { getAll, getById, create, update, remove } = require('../services/categories-service');
const statusResponses = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
  getAll: async (req, res) => {
    try {
      const categories = await getAll();
      return categories.length > 0
        ? res.status(statusResponses.RESPONSE_OK).json({ data: categories })
        : res.status(statusResponses.RESPONSE_OK_NO_CONTENT).json({ data: [] });
    } catch (error) {
      return res.status(statusResponses.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  getById: async (req, res) => {
    try {
      const category = await getById(req.params.id);
      return category
        ? res.status(statusResponses.RESPONSE_OK).json({ data: category })
        : res.status(statusResponses.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
    } catch (error) {
      return res.status(statusResponses.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  create: async (req, res) => {
    try {
      req.body.image = req.file;
      const category = await create(req.body);
      return res.status(statusResponses.RESPONSE_OK_CREATED).json({
        message: `Category ${messages.RESPONSE_OK_CREATED}`,
        data: category,
      });
    } catch (error) {
      return res.status(statusResponses.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      req.body.image = req.file;
      const response = await update(req.params.id, req.body);
      return response
        ? res.status(statusResponses.RESPONSE_OK).json({
          message: `Category ${messages.RESPONSE_OK_UPDATED}`,
          data: response,
        })
        : res
            .status(statusResponses.BAD_REQUEST_ERROR)
            .json({ message: messages.BAD_REQUEST_ERROR });
    } catch (error) {
      return res.status(statusResponses.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  remove: async (req, res) => {
    try {
      const response = await remove(req.params.id);
      if (response === 0) {
        return res
          .status(statusResponses.BAD_REQUEST_ERROR)
          .json({ message: messages.BAD_REQUEST_ERROR });
      }
      return res
        .status(statusResponses.RESPONSE_OK)
        .json({ message: `Category ${messages.RESPONSE_OK_DELETED}` });
    } catch (error) {
      return res.status(statusResponses.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },
};
