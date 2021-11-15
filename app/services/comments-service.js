const repository = require('../repositories/comments-repository');

module.exports = {
  getAll: () => repository.getAll(),

  create: data => repository.create(data)
};
