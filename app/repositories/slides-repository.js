const { Slide } = require('../models/index');

module.exports = {
  getById: async (id) => {
    const slide = await Slide.findOne({ where: { id } });
    return slide;
  },
  getByOrder: async (order) => {
    const slide = await Slide.findOne({ where: { order } });
    return slide;
  },
  getAll: async (options) => {
    const slides = await Slide.findAll(options);
    return slides;
  },
  create: async (data) => {
    const slide = Slide.build(data);
    await slide.save();
    return slide;
  },
  update: async (id, data) => {
    const slide = await Slide.findOne({ where: { id } });
    await slide.update(data);
    return slide;
  },
  destroy: async (id) => {
    const slide = await Slide.findOne({ where: { id } });
    await slide.destroy();
    return slide;
  }
};
