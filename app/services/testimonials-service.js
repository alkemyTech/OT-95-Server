const testimonilasRepository = require('../repositories/testimonials-repository');

module.exports = {

  getAll: () => testimonilasRepository.getAll(),

  getById: id => testimonilasRepository.getById(id),

  create: (name, image, content) => testimonilasRepository.create(name, image, content),

  update: async (id, data) => {
    try {
      return await testimonilasRepository.update(id, data);
    } catch (err) {
      return null;
    }
  },

  destroy: id => testimonilasRepository.destroy(id)

};

