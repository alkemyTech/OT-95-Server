const { News } = require('../models/index');

module.exports = {

  getAll: () => News.findAll(),

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

  destroy: id => News.destroy({ where: { id } })

};