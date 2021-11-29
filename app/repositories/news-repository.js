const { News } = require('../models/index');

module.exports = {

  getAll: (perPage, page) => {
    return News.findAll({limit: perPage, offset: ((page - 1) * perPage)});
  },

  getById: id => News.findByPk(id),

  create: (name, image, content) => News.create({
    name,
    image,
    content
  }),

  update: (id, name, image, content) => News.update({
    name,
    image,
    content
  }, { where: { id } }),

  destroy: id => News.destroy({ where: { id } }),

  count: () => News.count()

};