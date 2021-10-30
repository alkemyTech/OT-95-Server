const categoriesRepository = require('../repositories/categories-repository');

module.exports = {
  getAll: () => categoriesRepository.getCategories(),
  getById: id => categoriesRepository.getCategory(id),
  create: category => categoriesRepository.create(category),
  update: (id, category) => categoriesRepository.updateCategory(id, category),
  remove: id => categoriesRepository.deleteCategory(id)
};
