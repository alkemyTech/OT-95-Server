const { isAdmin } = require('./isAdmin');

module.exports = {

  isOwnerShip: (req, res, next) => {
    if (+req.params.id === req.user.id) {
      next();
    } else {
      isAdmin(req, res, next);
    }
  }

};
