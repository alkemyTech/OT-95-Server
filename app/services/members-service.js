const membersRepository = require('../repositories/members-repository');
const status = require('../constants/constants');
const messages = require('../constants/messages');
const { uploadFile } = require('./uploadFile');
const { saveTempImage } = require('../helpers/saveTempImage');

module.exports = {
  getById: async (id) => {
    try {
      const member = await membersRepository.getById(id);
      if (!member) {
        return { status: status.NOT_FOUND_ERROR, response: messages.NOT_FOUND_ERROR };
      }
      return { status: status.RESPONSE_OK, response: member };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
    }
  },
  getAll: async () => {
    try {
      const members = await membersRepository.getAll();
      if (members.length === 0) {
        return { status: status.NOT_FOUND_ERROR, response: messages.NOT_FOUND_ERROR };
      }
      return { status: status.RESPONSE_OK, response: members };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
    }
  },
  create: async (body) => {
    try {
      const { image, ...data } = body;
      const uploadPath = await saveTempImage(image);
      const location = await uploadFile({ mimetype: 'image/jpg', path: uploadPath });
      data.image = location;
      await membersRepository.create(data);
      return { status: status.RESPONSE_OK_CREATED, response: messages.RESPONSE_OK_CREATED };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
    }
  },
  update: async (id, data) => {
    try {
      await membersRepository.update(id, data);
      return { status: status.RESPONSE_OK_UPDATED, response: messages.RESPONSE_OK_UPDATED };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
    }
  },
  destroy: async (id) => {
    try {
      await membersRepository.destroy(id);
      return { status: status.RESPONSE_OK, response: messages.RESPONSE_OK };
    } catch (error) {
      return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
    }
  }
};
