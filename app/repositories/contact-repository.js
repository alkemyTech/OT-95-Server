const { Contact } = require('../models/index');

module.exports = {
  getAllContacts: async () => Contact.findAll(),

  getByEmail: email => Contact.findOne({ where: { email } }),

  create: data => Contact.create(data)
};
