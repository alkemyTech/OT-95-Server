const testimonilasRepository = require('../repositories/testimonials-repository');

module.exports = {

  getAll: () => testimonilasRepository.getAll(),

  getById: id => testimonilasRepository.getById(id),

  create: (name, image, content) => testimonilasRepository.create(name, image, content),

  update: (name, image, content) => testimonilasRepository.update(name, image, content),

  destroy: id => testimonilasRepository.destroy(id)

};

