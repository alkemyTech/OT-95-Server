const { Member } = require('../models/index');

const getById = async (id) => {
  const member = await Member.findOne({ where: { id } });
  return member;
};

const getAll = async () => {
  const members = await Member.find();
  return members;
};

const create = async (data) => {
  const member = Member.build(data);
  await member.save();
  return member;
};

const update = async (id, data) => {
  const member = await Member.findOne({ where: { id } });
  await member.update(data);
  return member;
};

const destroy = async (id) => {
  const member = await Member.findOne({ where: { id } });
  await member.destroy();
  return member;
};

module.exports = {
  getById,
  getAll,
  create,
  update,
  destroy
};
