const slidesRepository = require('../repositories/slides-repository');
const status = require('../constants/constants');
const messages = require('../constants/messages');
const { uploadFile } = require('./uploadFile');

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
      const slides = await slidesRepository.getAll();
      if (slides.length === 0) {
        return { status: status.NOT_FOUND_ERROR, response: messages.NOT_FOUND_ERROR };
      }
      return { status: status.RESPONSE_OK, response: slides };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
    }
  },
  create: async (file) => {
    try {
      const uploadPath = __dirname + '../temp/' + file.name;
      file.mv(uploadPath, function(err) {
        if (err) {
          return resizeBy.status(500).json(err);
        }
      });
      // const fileName = await uploadFile({ mimetype: file.mimetype, path: `app/temp/${file.name}` });
      // console.log(fileName);
      // await slidesRepository.create(data);
      return { status: status.RESPONSE_OK_CREATED, response: 'a' };
    } catch (error) {
      console.log(error);
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
