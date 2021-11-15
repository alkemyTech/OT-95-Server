const repository = require('../repositories/comments-repository');

module.exports = {
  getAll: () => repository.getAll(),

  getOne: id => repository.getById(id),

  create: data => repository.create(data),

  update: (id, data) => repository.update(id, data)
};
