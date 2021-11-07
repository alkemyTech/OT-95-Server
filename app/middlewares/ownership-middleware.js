const { isAdmin } = require('./isAdmin');

module.exports = {

  isOwnerShip: (req, res, next) => {
    if (+req.params.id === req.user.uid) {
      next();
    } else {
      isAdmin(req, res, next);
    }
  }

};
