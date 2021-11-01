const {
    getMemberById,
    getMembers,
    createMember,
    updateMember,
    destroyMember,
} = require('../services/members-service');

const getById = async (req, res) => {
  const member = await getMemberById(req.params.id);
  return res.status(member.status).json(member.response);
};

const getAll = async (req, res) => {
  const members = await getMembers();
  return res.status(members.status).json(members.response);
};

const create = async (req, res) => {
  const member = await createMember(req.body);
  return res.status(member.status).json(member.response);
};

const update = async (req, res) => {
  const member = await updateMember(req.params.id, req.body);
  return res.status(member.status).json(member.response);
};

const destroy = async (req, res) => {
  const member = await destroyMember(req.params.id);
  return res.status(member.status).json(member.response);
};

module.exports = {
  getById,
  getAll,
  create,
  update,
  destroy,
};
