const { getAllContacts, getByEmail, create,
} = require('../repositories/contact-repository');
const { generateTemplate } = require('../helpers/generateTemplate');
const { sendEmail } = require('../services/email-service');

module.exports = {
  getAll: () => getAllContacts(),

  getByEmail: email => getByEmail(email),

  create: async (data) => {
    try {
      const contact = await create(data);

      if (contact) {
        const html = await generateTemplate(1, 'contact');
        const subject = 'Gracias por contactarse';
        await sendEmail(contact.email, html, subject);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
