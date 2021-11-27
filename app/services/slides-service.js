const slidesRepository = require('../repositories/slides-repository');
const { uploadFile } = require('./uploadFile');
const { saveTempImage } = require('../helpers/saveTempImage');

module.exports = {

  getById: async (id) => {
    const slide = await slidesRepository.getById(id);
    return slide;
  },

  getAll: async () => {
    const slides = await slidesRepository.getAll({ order: [['order', 'ASC']] });
    return slides;
  },

  create: async (body) => {
    const { imageUrl, ...data } = body;
    const uploadPath = await saveTempImage(imageUrl);
    const location = await uploadFile({ mimetype: 'image/jpg', path: uploadPath });
    data.imageUrl = location;

    const slide = await slidesRepository.create(data);

    return slide;
  },

  update: async (id, body) => {
    const { imageUrl, ...data } = body;

    if (imageUrl) {
      const uploadPath = await saveTempImage(imageUrl);
      const location = await uploadFile({ mimetype: 'image/jpg', path: uploadPath });
      data.imageUrl = location;
    }

    const slide = await slidesRepository.update(id, data);

    return slide;
  },

  destroy: async (id) => {
    const slide = await slidesRepository.destroy(id);

    return slide;
  }
};
