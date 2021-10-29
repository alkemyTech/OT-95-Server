const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../repositories/categories-repository');
const statusResponses = require('../constants/constants');
const messages = require('../constants/messages');

const getAll = async (req, res) => {
  try {
    const categories = await getCategories();
    return res.status(statusResponses.RESPONSE_OK).json(categories);
  } catch (error) {
    return res
      .status(statusResponses.INTERNAL_ERROR)
      .json(messages.INTERNAL_ERROR);
  }
};

const getById = async (req, res) => {
  try {
    const category = getCategory(req.params.id);
    if (category) {
      return res.status(statusResponses.RESPONSE_OK).json(category);
    }
    return res
      .status(statusResponses.NOT_FOUND_ERROR)
      .json(messages.NOT_FOUND_ERROR);
  } catch (error) {
    return res
      .status(statusResponses.INTERNAL_ERROR)
      .json(messages.INTERNAL_ERROR);
  }
};

const create = async (req, res) => {
  try {
    await createCategory(req.body);
    return res
      .status(statusResponses.RESPONSE_OK_CREATED)
      .json(messages.RESPONSE_OK_CREATED);
  } catch (error) {
    return res
      .status(statusResponses.INTERNAL_ERROR)
      .json(messages.INTERNAL_ERROR);
  }
};

const update = async (req, res) => {
  try {
    updateCategory(req.params.id, req.body);
    return res.status(statusResponses.RESPONSE_OK).json(messages.RESPONSE_OK);
  } catch (error) {
    return res
      .status(statusResponses.INTERNAL_ERROR)
      .json(messages.INTERNAL_ERROR);
  }
};

const destroy = async (req, res) => {
  try {
    deleteCategory(req.params.id);
    return res.status(statusResponses.RESPONSE_OK).json(messages.RESPONSE_OK);
  } catch (error) {
    return res
      .status(statusResponses.INTERNAL_ERROR)
      .json(messages.INTERNAL_ERROR);
  }
};

module.exports = { getAll, getById, create, update, destroy };
