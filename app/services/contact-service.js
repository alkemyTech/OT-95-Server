const { getAllContacts, getByEmail, create } = require('../repositories/contact-repository');

module.exports = {
  getAll: () => getAllContacts(),

  getByEmail: email => getByEmail(email),

  create: data => create(data)
};
