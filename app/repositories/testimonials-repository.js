const { Testimonial } = require('../models/index');

module.exports = {

  getAll: () => Testimonial.findAll(),

  getById: id => Testimonial.findByPk(id),

  create: (name, image, content) => Testimonial.create({
    name,
    image,
    content
  }),

  update: (id, name, image, content) => Testimonial.update({
    name,
    image,
    content
  }, { where: { id } }),

  destroy: id => Testimonial.destroy({ where: { id } })

};
