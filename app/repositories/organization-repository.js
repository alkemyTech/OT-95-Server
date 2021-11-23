const { Organization } = require('../models/index');

module.exports = {

  getAll: () => Organization.findAll(),

  getById: id => Organization.findByPk(id),

  getPublicData: () => Organization.findAll({
    attributes: ['name', 'image', 'phone', 'address', 'facebookUrl', 'instagramUrl', 'linkedinUrl'],
    include: 'slides',
    order: [
      ['slides', 'order', 'ASC'],
    ]
  }),

  create: organizationData => Organization.create(organizationData),

  update: (id, organizationData) => Organization.update(
    organizationData, { where: { id } }
  ),

  remove: id => Organization.destroy({ where: { id } })

};
