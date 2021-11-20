const organizationRepository = require('../repositories/organization-repository');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

module.exports = {
  generateTemplate: async (organizationId, from) => {
    try {
      let title;
      const organization = await organizationRepository.getById(organizationId);
      const templatePath = path.resolve(
        __dirname,
        '..',
        'views',
        'emailTemplate.ejs'
      );
      const template = ejs.compile(fs.readFileSync(templatePath, 'utf-8'));
      if (from === 'register') {
        title = `Bienvenido a ${organization.name}`;
      } else {
        title = `Gracias por contactarse con ${organization.name}`;
      }
      const html = template({
        title,
        text: organization.aboutUsText,
        phone: organization.phone,
        address: organization.address,
      });

      return html;
    } catch (error) {
      console.log(error);
    }
  },
};
