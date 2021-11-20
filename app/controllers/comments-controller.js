const commentsService = require('../services/comments-service');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
  getAll: async (req, res) => {
    try {
      const comments = await commentsService.getAll();

      if (comments.length === 0) {
        return res.status(codeStatus.NOT_FOUND_ERROR).json({ data: [] });
      }

      return res.status(codeStatus.RESPONSE_OK).json({ data: comments });
    } catch (err) {
      return res.status(codeStatus.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  create: async (req, res) => {
    try {
      const comment = await commentsService.create(req.body);

      res.status(codeStatus.RESPONSE_OK_CREATED)
      .json({ message: messages.RESPONSE_OK_CREATED, data: comment });
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      const comment = await commentsService.update(req.params.id, req.body.body);

      res.status(codeStatus.RESPONSE_OK)
      .json({ message: messages.RESPONSE_OK_UPDATED, data: comment });
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  delete: async (req, res) => {
    try {
      await commentsService.delete(req.params.id);

      res.status(codeStatus.RESPONSE_OK)
      .json({ message: messages.RESPONSE_OK_DELETED });
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  }
};
