const { getAllContacts, create } = require('../repositories/contact-repository');

module.exports = {
  getAll: () => getAllContacts(),

  create: data => create(data)
};
