const newsService = require('../services/news-service');
const userRepository = require('../repositories/users-repository');

module.exports = {

  userExist: async (id) => {
    const user = await userRepository.getOne(id);
    if (!user) {
      throw new Error('user not exist');
    }
  },

  newsExist: async (id) => {
    const news = await newsService.getById(id);
    if (!news) {
      throw new Error('news not exist');
    }
  }
};
