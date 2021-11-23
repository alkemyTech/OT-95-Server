const testimonilasRepository = require('../repositories/testimonials-repository');
const { uploadFile } = require('./uploadFile');

module.exports = {

  getAll: async (limit, page, url) => {
    const { count, rows } = await testimonilasRepository.getAll(limit, (page - 1) * limit);
    const pages = Math.ceil(count / limit);
    return {
      info: {
        count,
        pages,
        next: page < pages ? `${url}?page=${page + 1}` : null,
        prev: page > 1 ? `${url}?page=${page - 1}` : null
      },
      data: rows
    };
  },

  getById: id => testimonilasRepository.getById(id),

  create: async (data) => {
    if (data.image) {
      data.image =  await uploadFile(data.image);
    }
    return testimonilasRepository.create(data);
  },

  update: async (id, data) => {
    try {
      if (data.image) {
        data.image =  await uploadFile(data.image);
      }
      return await testimonilasRepository.update(id, data);
    } catch (err) {
      return null;
    }
  },

  destroy: id => testimonilasRepository.destroy(id)

};

