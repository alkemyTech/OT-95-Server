const { Testimonial } = require('../models/index');

module.exports = {

  getAll: () => Testimonial.findAll(),

  getById: id => Testimonial.findByPk(id),

  create: data => Testimonial.create(data),

  update: async (id, data) => {
    const testimonial = await Testimonial.findByPk(id);
    await testimonial.update(data);
    return testimonial;
  },

  destroy: id => Testimonial.destroy({ where: { id } })

};
