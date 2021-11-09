const { Testimonial } = require('../models/index');

module.exports = {

  getAll: () => Testimonial.findAll(),

  getById: id => Testimonial.findByPk(id),

  create: (name, image, content) => Testimonial.create({ name, image, content }),

  update: async (id, data) => {
    const testimonial = await Testimonial.findByPk(id);
    await testimonial.update(data);
    return testimonial;
  },

  destroy: id => Testimonial.destroy({ where: { id } })

};
