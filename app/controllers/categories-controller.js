const { getAll, getById, create, update, remove } = require('../services/categories-service');
const statusResponses = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
  getAll: async (req, res) => {
    try {
      const categories = await getAll();
      return res.status(statusResponses.RESPONSE_OK).json(categories);
    } catch (error) {
      return res.status(statusResponses.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },

  getById: async (req, res) => {
    try {
      const category = await getById(req.params.id);
      if (category) {
        return res.status(statusResponses.RESPONSE_OK).json(category);
      }
      return res.status(statusResponses.NOT_FOUND_ERROR).json(messages.NOT_FOUND_ERROR);
    } catch (error) {
      return res.status(statusResponses.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },

  create: async (req, res) => {
    try {
      await create(req.body);
      return res.status(statusResponses.RESPONSE_OK_CREATED).json(messages.RESPONSE_OK_CREATED);
    } catch (error) {
      return res.status(statusResponses.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },

  update: async (req, res) => {
    try {
      const [response] = await update(req.params.id, req.body);
      if (response === 0) {
        return res.status(statusResponses.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
      }
      return res.status(statusResponses.RESPONSE_OK).json(messages.RESPONSE_OK);
    } catch (error) {
      return res.status(statusResponses.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },

  remove: async (req, res) => {
    try {
      const response = await remove(req.params.id);
      if (response === 0) {
        return res.status(statusResponses.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
      }
      return res.status(statusResponses.RESPONSE_OK).json(messages.RESPONSE_OK);
    } catch (error) {
      return res.status(statusResponses.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
};
