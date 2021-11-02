const { check } = require('express-validator');

module.exports = [

  check('name', 'debes ingresar un nombre').notEmpty(),

  check('content', 'debes ingresar un contenido').notEmpty()

];
