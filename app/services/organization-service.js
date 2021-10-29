'use strict';
const OrganizationRepository = require('../repositories/organization-repository');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

const getAll = async (req, res) => {
  try {
    const organizations = await OrganizationRepository.getAll();
    res.status(codeStatus.RESPONSE_OK).json({ data: organizations });
  } catch (err) {
    res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const getById = async (req, res) => {
  try {
    const organization = await OrganizationRepository.getById(req.params.id);
    res.status(codeStatus.RESPONSE_OK).json({ data: organization });
  } catch (err) {
    res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const create = async (req, res) => {
  try {
    const organization = await OrganizationRepository.create(req.body);
    res.status(codeStatus.RESPONSE_OK_CREATED).json({ data: organization });
  } catch (err) {
    res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const update = async (req, res) => {
  try {
    const organization = await OrganizationRepository.update(req.params.id, req.body);
    res.status(codeStatus.RESPONSE_OK_CREATED).json({ data: organization });
  } catch (err) {
    res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const remove = async (req, res) => {
  try {
    const organization = await OrganizationRepository.remove(req.params.id);
    res.status(codeStatus.RESPONSE_OK).json({ data: organization });
  } catch (err) {
    res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
