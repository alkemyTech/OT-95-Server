const organizationRepository = require('../repositories/organization-repository');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

module.exports = {

  generateTemplate: async (organizationId) => {
    try {
      const organization = await organizationRepository.getById(organizationId);
      const templatePath = path.resolve(__dirname, '..', 'views', 'emailTemplate.ejs');
      const template = ejs.compile(fs.readFileSync(templatePath, 'utf-8'));
      const html = template({ title: `Bienvenido a ${organization.name}`, text: organization.aboutUsText, phone: organization.phone, address: organization.address });
      return html;
    } catch (error) {
      console.log(error);
    }
    
  }

};
