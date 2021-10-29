'use strict';
const Organization = require('../models/organization-model');

const getAll = async () => {
  try {
    return await Organization.findAll();
  } catch (err) {
    return err.message;
  }
};

const getById = async (organizationId) => {
  try {
    return await Organization.findByPk(organizationId);
  } catch (err) {
    return err.message;
  }
};

const create = async (organizationData) => {
  try {
    return await Organization.create(organizationData);
  } catch (err) {
    return err.message;
  }
};

const update = async (organizationId, organizationData) => {
  try {
    return await Organization.update(organizationData, { where: { id: organizationId } });
  } catch (err) {
    return err.message;
  }
};

const remove = async (organizationId) => {
  try {
    return await Organization.destroy({ where: { id: organizationId } });
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
