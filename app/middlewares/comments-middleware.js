const { check } = require('express-validator');
const validateFields = require('./validate-fields');
const helper = require('../helpers/comments');
const commentsService = require('../services/comments-service');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
  commentCreate: [
    check('userId', 'required').notEmpty().bail().custom(helper.userExist),
    check('body', 'required').notEmpty(),
    check('newsId', 'required').notEmpty().bail().custom(helper.newsExist),
    validateFields
  ],

  commentUpdate: [
    check('userId', 'non-editable field').optional().isEmpty(),
    check('body', 'required').notEmpty(),
    check('newsId', 'non-editable field').optional().isEmpty(),
    validateFields
  ],

  commentIsYours: async (req, res, next) => {
    try {
      const comment = await commentsService.getById(req.params.id);

      if (comment.userId !== req.user.id && req.user.roleId !== 1) {
        return res.status(codeStatus.NOK_USER_CREDENTIALS)
        .json({ messages: messages.UNAUTHORIZED_USER_CREDENTIALS });
      }

      return next();
    } catch (err) {
      return res.status(codeStatus.NOT_FOUND_ERROR).json({ messsge: messages.NOT_FOUND_ERROR });
    }
  }

};
