const { check, validationResult } = require('express-validator');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
  validateCreate: async (req, res, next) => {
    await check('name').notEmpty().run(req);
    await check('description').isString().optional().run(req);
    await check('image').isString().optional().run(req);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(codeStatus.BAD_REQUEST_ERROR).json({
        message: messages.BAD_REQUEST_ERROR,
        errors: errors.array()
      });
    }
    return next();
  }
};
