const {
  getAllContacts,
  getByEmail,
  create,
} = require("../repositories/contact-repository");
const { generateTemplate } = require("../helpers/generateTemplate");
const { sendEmail } = require("../services/email-service");

module.exports = {
  getAll: () => getAllContacts(),

  getByEmail: (email) => getByEmail(email),

  create: async (data) => {
    try {
      const contact = create(data);

      if (contact) {
        const html = await generateTemplate(1, "contact");
        const subject = "Gracias por contactarse con";
        await sendEmail(contact.email, html, subject);
      }
      return contact;
    } catch (error) {
      console.log(error);
    }
  },
};
