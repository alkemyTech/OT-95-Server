const membersService = require('../services/members-service');

module.exports = {
  getById: async (req, res) => {
    const member = await membersService.getById(req.params.id);
    return res.status(member.status).json(member.response);
  },
  getAll: async (req, res) => {
    const members = await membersService.getAll();
    return res.status(members.status).json(members.response);
  },
  create: async (req, res) => {
    const member = await membersService.create(req.body);
    return res.status(member.status).json(member.response);
  },
  update: async (req, res) => {
    const member = await membersService.update(req.params.id, req.body);
    return res.status(member.status).json(member.response);
  },
  destroy: async (req, res) => {
    const member = await membersService.destroy(req.params.id);
    return res.status(member.status).json(member.response);
  }
};
