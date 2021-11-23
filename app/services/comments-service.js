const repository = require('../repositories/comments-repository');

module.exports = {
  getAll: () => repository.getAll(),

  getById: id => repository.getById(id),

  getAllByPost: id => repository.getAllByPost(id),

  create: data => repository.create(data),

  update: (id, data) => repository.update(id, data),

  delete: id => repository.delete(id),

};
