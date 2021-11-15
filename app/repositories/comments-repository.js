const { Comment } = require('../models/index');

module.exports = {
  getAll: () => Comment.findAll({
    attributes: ['body'],
    order: [['createdAt', 'ASC']]
  }),

  create: data => Comment.create(data)
};
