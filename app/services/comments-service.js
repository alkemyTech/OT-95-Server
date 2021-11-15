const repository = require('../repositories/comments-repository');

module.exports = {
  getAll: () => repository.getAll()
};
