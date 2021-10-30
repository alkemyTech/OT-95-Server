const { User } = require('../models');

module.exports = {
  existsUserWithEmail: async (email = '') => {
    const exists = await User.findOne({ where: { email } });
    if (exists) {
      throw new Error('Ya existe un usuario con ese correo electronico');
    }
  }
};
