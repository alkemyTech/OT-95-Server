const membersRepository = require('../repositories/members-repository');
const { uploadFile } = require('./uploadFile');

module.exports = {
  getById: async (id) => {
    const member = await membersRepository.getById(id);
    return member;
  },

  getAll: async (page, url) => {
    const limit = 10;
    const offset = limit * (page - 1);
    const { count, rows } = await membersRepository.getAll(offset, limit);
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

  create: async (data) => {
    if (data.image) {
      data.image = await uploadFile(data.image);
    }

    const member = await membersRepository.create(data);

    return member;
  },

  update: async (id, data) => {
    if (data.image) {
      data.image = await uploadFile(data.image);
    }

    const member = await membersRepository.update(id, data);
    return member;
  },

  destroy: async (id) => {
    const member = await membersRepository.destroy(id);
    return member;
  }
};
