const commentsService = require('../services/comments-service');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
  getAll: async (req, res) => {
    try {
      const comments = await commentsService.getAll();

      if (comments.length > 0) {
        res.status(codeStatus.RESPONSE_OK).json(comments);
      } else {
        res.status(codeStatus.RESPONSE_OK_NO_CONTENT).json(messages.RESPONSE_OK_NO_CONTENT);
      }
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },

  create: async (req, res) => {
    try {
      await commentsService.create(req.body);
      res.status(codeStatus.RESPONSE_OK_CREATED).json(messages.RESPONSE_OK_CREATED);
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  }
};
