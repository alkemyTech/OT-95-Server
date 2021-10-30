const { testimonials } = require('../models/index');

module.exports = {

  getAll: () => testimonials.findAll(),

  getById: id => testimonials.findByPk(id),

  create: (name, image, content) => testimonials.create({
    name,
    image: image || null,
    content: content || null
  }),

  update: (id, name, image, content) => testimonials.update({
    name,
    image: image || null,
    content: content || null
  }, { where: { id } }),

  destroy: id => testimonials.destroy({ where: { id } })

};
