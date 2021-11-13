'use strict';

const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');
const newsService = require('../services/news-service');

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
}

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
}

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
}

const update = async (req, res) => {
  try {
    const { name, image, content } = req.body;
    const news = await newssService.getById(req.params.id);

    if (news) {
      await newssService.update(req.params.id, name, image, content);
      res.status(codeStatus.RESPONSE_OK).json(messages.RESPONSE_OK);
    } else {
      res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
}

const destroy = async (req, res) => {
  try {
    const news = await newssService.getById(req.params.id);

    if (news) {
      await newssService.destroy(req.params.id);
      res.status(codeStatus.RESPONSE_OK).json(messages.RESPONSE_OK);
    } else {
      res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}
