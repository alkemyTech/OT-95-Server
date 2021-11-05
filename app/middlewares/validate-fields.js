const { validationResult } = require('express-validator');
const codeStatus = require('../constants/constants');

const validateFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json(errors);
  }
  next();
};

module.exports = validateFields;
