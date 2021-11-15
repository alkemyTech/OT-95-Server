const { check } = require('express-validator');
const validateFields = require('./validate-fields');
const newsService = require('../services/news-service');
const userRepository = require('../repositories/users-repository');

module.exports = {
  validateComments: [
    check('user_id', 'required').notEmpty().bail().custom(async (value) => {
      const user = await userRepository.getOne(value);
      if (!user) {
        return Promise.reject('user not exist');
      }
      return null;
    }),
    check('body', 'required').notEmpty(),
    check('news_id', 'required').notEmpty().bail().custom(async (value) => {
      const news = await newsService.getById(value);
      if (!news) {
        return Promise.reject('news not exist');
      }
      return null;
    }),
    validateFields
  ]
};
