'use strict';
const { Organization } = require('../models/index');

module.exports = {

  getAll: () => Organization.findAll(),

  getById: id => Organization.findByPk(id),

  create: organizationData => Organization.create(organizationData),

  update: (id, organizationData) => Organization.update(
    organizationData, { where: { id } }
  ),

  remove: id => Organization.destroy({ where: { id } })

};
