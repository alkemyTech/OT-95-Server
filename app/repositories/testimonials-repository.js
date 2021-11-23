const { Testimonial } = require('../models/index');

module.exports = {

  getAll: (limit, offset) => Testimonial.findAndCountAll({ offset, limit, attributes: ['id', 'name', 'image', 'content'] }),

  getById: id => Testimonial.findByPk(id, { attributes: ['id', 'name', 'image', 'content'] }),

  create: data => Testimonial.create(data),

  update: async (id, data) => {
    const testimonial = await Testimonial.findByPk(id);
    await testimonial.update(data);
    return testimonial;
  },

  destroy: id => Testimonial.destroy({ where: { id } })

};
