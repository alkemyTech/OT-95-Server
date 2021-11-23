const contactService = require('../services/contact-service');

module.exports = {
  contactExist: async (email) => {
    const contact = await contactService.getByEmail(email);

    if (contact) {
      throw new Error('email already registered');
    }
  }
};
