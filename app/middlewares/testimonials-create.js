const { check } = require('express-validator');

module.exports = [

  check('name', 'name is required').notEmpty(),

  check('content', 'content is required').notEmpty()

];
