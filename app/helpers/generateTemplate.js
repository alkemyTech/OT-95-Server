const organizationService = require('../services/organization-service');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

module.exports = {

  generateTemplate: async (organizationId) => {
    const organization = await organizationService.getById(organizationId);
    const templatePath = path.resolve(__dirname, '..', 'views', 'emailTemplate.ejs');
    const template = ejs.compile(fs.readFileSync(templatePath, 'utf-8'));

    const html = template({ title: `Bienvenido a ${organization.name}`, text: 'texto de bienvenida', phone: organization.phone, address: organization.address });

    return html;
  }

};
