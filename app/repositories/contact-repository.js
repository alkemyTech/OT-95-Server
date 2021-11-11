const { Contact } = require('../models/index');

module.exports = {
  getAllContacts: async () => Contact.findAll()
};
