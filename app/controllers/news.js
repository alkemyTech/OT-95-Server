'use strict';

const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

const getAll = async (req, res) => {
  try {
    
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
}

const getById = async (req, res) => {
  try {
    
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
}

const create = async (req, res) => {
  try {
    
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
}

const update = async (req, res) => {
  try {
    
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
}

const remove = async (req, res) => {
  try {
    
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
