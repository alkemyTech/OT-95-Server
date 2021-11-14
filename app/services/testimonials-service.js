const testimonilasRepository = require('../repositories/testimonials-repository');
const { uploadFile } = require('./uploadFile');

module.exports = {

  getAll: () => testimonilasRepository.getAll(),

  getById: id => testimonilasRepository.getById(id),

  create: async (data) => {
    if (data.image) {
      data.image =  await uploadFile(data.image);
    }
    return testimonilasRepository.create(data);
  },

  update: async (id, data) => {
    try {
      if (data.image) {
        data.image =  await uploadFile(data.image);
      }
      return await testimonilasRepository.update(id, data);
    } catch (err) {
      return null;
    }
  },

  destroy: id => testimonilasRepository.destroy(id)

};

