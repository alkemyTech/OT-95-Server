const membersRepository = require('../repositories/members-repository');
const { uploadFile } = require('./uploadFile');
const { saveTempImage } = require('../helpers/saveTempImage');

module.exports = {
  getById: async (id) => {
    const member = await membersRepository.getById(id);
    return member;
  },

  getAll: async () => {
    const members = await membersRepository.getAll();
    return members;
  },

  create: async (body) => {
    const { image, ...data } = body;
    const uploadPath = await saveTempImage(image);
    const location = await uploadFile({ mimetype: 'image/jpg', path: uploadPath });
    data.image = location;

    const member = await membersRepository.create(data);

    return member;
  },

  update: async (id, data) => {
    const member = await membersRepository.update(id, data);
    return member;
  },

  destroy: async (id) => {
    const member = await membersRepository.destroy(id);
    return member;
  }
};
