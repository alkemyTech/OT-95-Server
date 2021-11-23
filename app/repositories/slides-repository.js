const { Slide } = require('../models/index');

module.exports = {
  getById: id => Slide.findByPk(id),

  getByOrder: order => Slide.findOne({ where: { order } }),

  getAll: ({ order }) => Slide.findAll({ order, attributes: ['imageUrl', 'order'] }),

  getAllPagination: (offset, limit) => Slide.findAndCountAll({ offset, limit, attributes: ['imageUrl', 'order'] }),

  create: data => Slide.create(data),

  update: async (id, data) => {
    const slide = await Slide.findByPk(id);
    await slide.update(data);
    return slide;
  },

  destroy: id => Slide.destroy({ where: { id } })
};
