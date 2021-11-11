const slidesRepository = require('../repositories/slides-repository');
const status = require('../constants/constants');
const messages = require('../constants/messages');
const { uploadFile } = require('./uploadFile');
const { saveTempImage } = require('../helpers/saveTempImage');

const getSlides = async () => {
  let slides = await slidesRepository.getAll();
  slides = slides.map((slide) => {
    return {
      img: slide.imageUrl,
      order: slide.order
    };
  });
  return slides;
};

module.exports = {
  getById: async (id) => {
    try {
      const slide = await slidesRepository.getById(id);
      if (!slide) {
        return { status: status.NOT_FOUND_ERROR, response: messages.NOT_FOUND_ERROR };
      }
      return { status: status.RESPONSE_OK, response: slide };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
    }
  },
  getAll: async () => {
    try {
      const slides = await getSlides();
      if (slides.length === 0) {
        return { status: status.NOT_FOUND_ERROR, response: messages.NOT_FOUND_ERROR };
      }
      return {
        status: status.RESPONSE_OK,
        response: slides
      };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
    }
  },
  create: async (data) => {
    try {
      const { imageUrl, text, order, organizationId } = data;
      const uploadPath = await saveTempImage(imageUrl);
      const location = await uploadFile({ mimetype: 'image/jpg', path: uploadPath });
      await slidesRepository.create({ imageUrl: location, text, order, organizationId });
      return { status: status.RESPONSE_OK_CREATED, response: messages.RESPONSE_OK_CREATED };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
    }
  },
  update: async (id, data) => {
    try {
      await slidesRepository.update(id, data);
      return { status: status.RESPONSE_OK_UPDATED, response: messages.RESPONSE_OK_UPDATED };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
    }
  },
  destroy: async (id) => {
    try {
      await slidesRepository.destroy(id);
      return { status: status.RESPONSE_OK, response: messages.RESPONSE_OK };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
    }
  }
};
