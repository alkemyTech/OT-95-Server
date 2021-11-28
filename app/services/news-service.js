const newsRepository = require('../repositories/news-repository');

const getAll = async (perPage, page) => {
    const totalDocs = await newsRepository.count();
    const docs = await newsRepository.getAll(perPage, page);
    let news = {
        data: docs,
        perPage,
        page: (page + 1),
        totalDocs
    };
    if(perPage * (page + 1) <= totalDocs) news.nextPage = (page + 1);
    return news;
};

const getById = id => newsRepository.getById(id);

const create = (name, image, content) => newsRepository.create(name, image, content);

const update = (name, image, content) => newsRepository.update(id, name, image, content);

const destroy = id => newsRepository.destroy(id);

module.exports = { getAll, getById, create, update, destroy };