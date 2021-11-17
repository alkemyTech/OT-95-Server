const categoriesRepository = require('../repositories/categories-repository');
const { uploadFile } = require('./uploadFile');

module.exports = {
  getAll: async ({ page, url }) => {
    const limit = 5;
    const offset = (page - 1) * limit;
    const { count, rows } = await categoriesRepository.getCategories(offset, limit);
    const pages = Math.ceil(count / limit);
    const next = page < pages ? `${url}?page=${page + 1}` : null;
    const prev = page > 1 ? `${url}?page=${page - 1}` : null;
    return {
      info: {
        count,
        pages,
        next,
        prev,
      },
      data: rows,
    };
  },

  getById: id => categoriesRepository.getCategory(id),

  create: async (category) => {
    if (category.image) {
      category.image = await uploadFile(category.image);
    }
    return categoriesRepository.createCategory(category);
  },

  update: async (id, category) => {
    try {
      if (category.image) category.image = await uploadFile(category.image);
      return await categoriesRepository.updateCategory(id, category);
    } catch (err) {
      return null;
    }
  },

  remove: id => categoriesRepository.deleteCategory(id),
};
