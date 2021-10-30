const statusCode = require('../constants/constants');
const messages = require('../constants/messages');
const { getRoles, createRole, getRole, updateRole, deleteRole } = require('../repositories/roles-repository');

const getById = async (req, res) => {
  try {
    const rol = getRole(req.params.id);

    if (rol) {
      return res.status(statusCode.RESPONSE_OK).json(rol);
    }

    return res.status(statusCode.NOT_FOUND_ERROR).json(messages.NOT_FOUND_ERROR);
  } catch (err) {
    return res.status(statusCode.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};


const getAll = async (req, res) => {
  try {
    const roles = await getRoles();

    return res.status(statusCode.RESPONSE_OK).json(roles);
  } catch (err) {
    return res.status(statusCode.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const create = async (req, res) => {
  try {
    await createRole(req.body);
    return res.status(statusCode.RESPONSE_OK_CREATED)
    .json({ message: messages.RESPONSE_OK_CREATED });
  } catch (err) {
    return res.status(statusCode.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const remove = async (req, res) => {
  try {
    deleteRole(req.params.id);
    return res.status(statusCode.RESPONSE_OK).json({ message: messages.RESPONSE_OK });
  } catch (err) {
    return res.status(statusCode.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const update = async (req, res) => {
  try {
    updateRole(req.params.id, req.body);
    return res.status(statusCode.RESPONSE_OK).json({ message: messages.RESPONSE_OK });
  } catch (err) {
    return res.status(statusCode.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
