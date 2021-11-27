const validateFields = require('./validate-fields');
const { check } = require('express-validator');
const membersRepository = require('../repositories/members-repository');
const status = require('../constants/constants');
const messages = require('../constants/messages');

const existMemberById = async (id) => {
  const member = await membersRepository.getById(id);
  if (!member) {
    throw new Error(`Member with id ${id} does not exist`);
  }
};

module.exports = {
  validateCreation: [
    check('name', 'Name is required').notEmpty(),
    check('name', 'Name must be a string').isString(),
    validateFields
  ],
  existMember: [
    check('id').custom(existMemberById),
    validateFields
  ],
  validateImg: (req, res, next) => {
    if (!req.file) {
      return res.status(status.BAD_REQUEST_ERROR).json({ message: messages.IMAGE_NOT_FOUND });
    }
    return next();
  }
};
