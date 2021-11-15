const express = require('express');
const multer = require('multer');

const router = express.Router();
const categoriesController = require('../controllers/categories-controller');
const { validateCreate, validateUpdate } = require('../middlewares/categories-middleware');
const validateJWT = require('../middlewares/validate-jwt');
const { isAdmin } = require('../middlewares/isAdmin');

const upload = multer({ dest: './temp' });

// GET all categories by name.
router.get('/', validateJWT, isAdmin, categoriesController.getAll);

router.get('/:id', validateJWT, isAdmin, categoriesController.getById);

router.post(
  '/',
  validateJWT,
  isAdmin,
  upload.single('image'),
  validateCreate,
  categoriesController.create
);

router.put(
  '/:id',
  validateJWT,
  isAdmin,
  upload.single('image'),
  validateUpdate,
  categoriesController.update
);

router.delete('/:id', validateJWT, isAdmin, categoriesController.remove);

module.exports = router;
