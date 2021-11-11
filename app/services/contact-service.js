const { getAllContacts } = require('../repositories/contact-repository');

module.exports = {
  getAll: () => getAllContacts()
};
