const validateFields = require('./validate-fields');
const { check } = require('express-validator');
const membersRepository = require('../repositories/members-repository');

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
    check('image', 'Image is required').notEmpty(),
    validateFields
  ],
  existMember: [
    check('id').custom(existMemberById),
    validateFields
  ]
};
