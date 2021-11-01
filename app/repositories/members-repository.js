const { Member } = require('../models/index');

module.exports = {
  getById: async (id) => {
    const member = await Member.findOne({ where: { id } });
    return member;
  },
  getAll: async () => {
    const members = await Member.find();
    return members;
  },
  create: async (data) => {
    const member = Member.build(data);
    await member.save();
    return member;
  },
  update: async (id, data) => {
    const member = await Member.findOne({ where: { id } });
    await member.update(data);
    return member;
  },
  destroy: async (id) => {
    const member = await Member.findOne({ where: { id } });
    await member.destroy();
    return member;
  }
};
