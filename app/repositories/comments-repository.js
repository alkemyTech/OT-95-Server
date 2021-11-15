const { Comment } = require('../models/index');

module.exports = {
  getAll: () => Comment.findAll({
    attributes: ['body'],
    order: [['createdAt', 'ASC']]
  }),

  getById: id => Comment.findByPk(id),

  create: data => Comment.create(data),

  update: (id, data) => Comment.update(data, { where: { id } })
};
