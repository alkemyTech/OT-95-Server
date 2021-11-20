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
        return {
          status: status.NOT_FOUND_ERROR,
          response: { message: messages.NOT_FOUND_ERROR }
        };
      }

      return {
        status: status.RESPONSE_OK,
        response: { data: slide }
      };
    } catch (error) {
      return {
        status: status.INTERNAL_ERROR,
        response: { message: messages.INTERNAL_ERROR }
      };
    }
  },

  getAll: async () => {
    try {
      const slides = await getSlides();

      if (slides.length === 0) {
        return { status: status.RESPONSE_OK_NO_CONTENT, response: { data: [] } };
      }

      return {
        status: status.RESPONSE_OK,
        response: { data: slides }
      };
    } catch (error) {
      return {
        status: status.INTERNAL_ERROR,
        response: { message: messages.INTERNAL_ERROR }
      };
    }
  },

  create: async (body) => {
    try {
      const { imageUrl, ...data } = body;
      const uploadPath = await saveTempImage(imageUrl);
      const location = await uploadFile({ mimetype: 'image/jpg', path: uploadPath });
      data.imageUrl = location;

      const slide = await slidesRepository.create(data);

      return {
        status: status.RESPONSE_OK_CREATED,
        response: {
          message: messages.RESPONSE_OK_CREATED,
          data: slide
        }
      };
    } catch (error) {
      return {
        status: status.INTERNAL_ERROR,
        response: { message: messages.INTERNAL_ERROR }
      };
    }
  },

  update: async (id, body) => {
    const { imageUrl, ...data } = body;

    try {
      if (imageUrl) {
        const uploadPath = await saveTempImage(imageUrl);
        const location = await uploadFile({ mimetype: 'image/jpg', path: uploadPath });
        data.imageUrl = location;
      }

      const slide = await slidesRepository.update(id, data);

      return {
        status: status.RESPONSE_OK,
        response: {
          message: messages.RESPONSE_OK_UPDATED,
          data: slide
        }
      };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: { message: messages.INTERNAL_ERROR } };
    }
  },

  destroy: async (id) => {
    try {
      const slide = await slidesRepository.destroy(id);

      return {
        status: status.RESPONSE_OK,
        response: {
          message: messages.RESPONSE_OK,
          data: slide
        }
      };
    } catch (error) {
      return {
        status: status.INTERNAL_ERROR,
        response: { message: messages.INTERNAL_ERROR }
      };
    }
  }

};
