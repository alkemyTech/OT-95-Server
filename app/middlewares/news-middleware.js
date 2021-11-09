const { check, validationResult } = require('express-validator');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');
const newsService = require('../services/news-service');

module.exports = {
  validateUpdate: async (req, res, next) => {
    await check('id')
    .custom(async value => {
        const newsDoc = await newsService.getById(value);
        if(!newsDoc) {
            return Promise.reject('La novedad no existe');
        }
    }).run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(codeStatus.BAD_REQUEST_ERROR).json({
        message: messages.BAD_REQUEST_ERROR,
        errors: errors.array()
      });
    }
    return next();
  },
  validateCreate: (req, res, next) => {    
    await check('name')
    .isString().bail()
    .notEmpty().run(req);
    await check('content')
    .notEmpty().run(req);
    await check('image')
    .isString().bail()
    .optional().run(req);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(codeStatus.BAD_REQUEST_ERROR).json({
        message: messages.BAD_REQUEST_ERROR,
        errors: errors.array()
      });
    }
    return next();
  },
};