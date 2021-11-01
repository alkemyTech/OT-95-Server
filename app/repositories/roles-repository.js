const { Role } = require('../models/index');

// Listado de Roles
const getRoles = async () => {
  const resp = await Role.findAll();
  return resp;
};

// Crea un rol nuevo
const createRole = async (rol) => {
  const resp = await Role.create(rol);
  return resp;
};

// Selecciona un rol por medio del id
const getRole = async (id) => {
  const resp = await Role.findByPk(id);
  return resp;
};
// Actualiza un rol por medio del id
const updateRole = async (id, rol) => {
  const resp = await Role.update(rol, { where: { id } });
  return resp;
};

// Borra un rol por medio del id
const deleteRole = async (id) => {
  const resp = await Role.destroy({ where: { id } });
  return resp;
};

module.exports = { getRoles, createRole, getRole, updateRole, deleteRole };
