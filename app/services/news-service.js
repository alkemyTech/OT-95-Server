const newsRepository = require('../repositories/news-repository');

const getAll = () => newsRepository.getAll();

const getById = id => newsRepository.getById(id);

const create = (name, image, content) => newsRepository.create(name, image, content);

const update = (name, image, content) => newsRepository.update(id, name, image, content);

const destroy = id => newsRepository.destroy(id);

module.exports = { getAll, getById, create, update, destroy };