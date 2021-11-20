const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');
const newsService = require('../services/news-service');
const commentsService = require('../services/comments-service');

const getAll = async (req, res) => {
  try {
    const news = await newsService.getAll();
    if (news.length > 0) {
      res.status(codeStatus.RESPONSE_OK).json(news);
    } else {
      res.status(codeStatus.RESPONSE_OK_NO_CONTENT).json(messages.RESPONSE_OK_NO_CONTENT);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const getById = async (req, res) => {
  try {
    const news = await newsService.getById(req.params.id);

    if (news) {
      res.status(codeStatus.RESPONSE_OK).json(news);
    } else {
      res.status(codeStatus.RESPONSE_OK_NO_CONTENT).json(messages.RESPONSE_OK_NO_CONTENT);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await commentsService.getAllByPost(req.params.id);

    if (comments.length === 0) {
      return res.status(codeStatus.NOT_FOUND_ERROR).json({ data: [] });
    }

    return res.status(codeStatus.RESPONSE_OK).json({ data: comments });
  } catch (err) {
    return res.status(codeStatus.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
  }
};

const create = async (req, res) => {
  try {
    const { name, image, content } = req.body;

    const newsCreated = await newsService.create(name, image, content);

    if (newsCreated) {
      res.status(codeStatus.RESPONSE_OK_CREATED).json(messages.RESPONSE_OK_CREATED);
    } else {
      res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const update = async (req, res) => {
  try {
    const { name, image, content } = req.body;
    const news = await newsService.getById(req.params.id);

    if (news) {
      await newsService.update(req.params.id, name, image, content);
      res.status(codeStatus.RESPONSE_OK).json(messages.RESPONSE_OK);
    } else {
      res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const destroy = async (req, res) => {
  try {
    const news = await newsService.getById(req.params.id);

    if (news) {
      await newsService.destroy(req.params.id);
      res.status(codeStatus.RESPONSE_OK).json(messages.RESPONSE_OK);
    } else {
      res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

module.exports = {
  getAll,
  getById,
  getComments,
  create,
  update,
  destroy
};
