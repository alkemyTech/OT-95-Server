const testimonilasRepository = require('../repositories/testimonials-repository');

const getAll = () => testimonilasRepository.getAll();

const getById = id => testimonilasRepository.getById(id);

const create = (name, image, content) => testimonilasRepository.create(name, image, content);

const update = (name, image, content) => testimonilasRepository.update(name, image, content);

const destroy = id => testimonilasRepository.destroy(id);

module.exports = { getAll, getById, create, update, destroy };
