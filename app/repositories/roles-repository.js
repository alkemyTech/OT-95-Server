const { Role } = require('../models/index');

module.exports = {
// Listado de Roles
  getRoles: () => Role.findAll(),

 // Selecciona un rol por medio del id
  getRole: id => Role.findByPk(id),


// Crea un rol nuevo
  createRole: rol => Role.create(rol),

 // Actualiza un rol por medio del id
  updateRole: (id, rol) => Role.update(rol, { where: { id } }),

 // Borra un rol por medio del id

  deleteRole: id => Role.destroy({ where: { id } })
};

