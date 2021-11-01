const membersRepository = require('../repositories/members-repository');
const status = require('../constants/constants');
const messages = require('../constants/messages');

const getMemberById = async (id) => {
  try {
    const member = await membersRepository.getById(id);
    if (!member) {
      return { status: status.NOT_FOUND_ERROR, response: messages.NOT_FOUND_ERROR };
    }
    return { status: status.RESPONSE_OK, response: member };
  } catch (error) {
    return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
  }
};

const getMembers = async () => {
  try {
    const members = await membersRepository.getAll();
    if (!members) {
      return { status: status.NOT_FOUND_ERROR, response: messages.NOT_FOUND_ERROR };
    }
    return { status: status.RESPONSE_OK, response: members };
  } catch (error) {
    return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
  }
};

const createMember = async (data) => {
  try {
    const member = await membersRepository.create(data);
    return { status: status.RESPONSE_OK_CREATED, response: member };
  } catch (error) {
    return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
  }
};

const updateMember = async (id, data) => {
  try {
    const member = await membersRepository.update(id, data);
    return { status: status.RESPONSE_OK, response: member };
  } catch (error) {
    return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
  }
};

const destroyMember = async (id) => {
  try {
    const member = await membersRepository.destroy(id);
    return { status: status.RESPONSE_OK, response: member };
  } catch (error) {
    return { status: status.INTERNAL_ERROR, response: messages.INTERNAL_ERROR };
  }
};

module.exports = {
  getMemberById,
  getMembers,
  createMember,
  updateMember,
  destroyMember
};
