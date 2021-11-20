const { Comment } = require('../models/index');

module.exports = {
  getAll: () => Comment.findAll({
    attributes: ['body'],
    order: [['createdAt', 'ASC']]
  }),

  getById: id => Comment.findByPk(id),

  getAllByPost: id => Comment.findAll({
    where: {
      newsId: id
    }
  }),

  create: data => Comment.create(data),

  update: async (id, body) => {
    const comment = await Comment.findByPk(id);
    await comment.update({ body });
    return comment;
  },

  delete: id => Comment.destroy({ where: { id } })
};
