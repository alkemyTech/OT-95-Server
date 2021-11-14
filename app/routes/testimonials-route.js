const express = require('express');
const multer = require('multer');

const router = express.Router();
const controller = require('../controllers/testimonials-controller');
const validateTestimonials = require('../middlewares/testimonials-middlewares');
const { isAdmin } = require('../middlewares/isAdmin');
const validateToken = require('../middlewares/validate-jwt');

const upload = multer({ dest: './temp' });

router.route('/')
    .get([validateToken, isAdmin], controller.all)
    .post([validateToken, isAdmin, upload.single('image'), validateTestimonials], controller.create);

router.route('/:id')
    .get(controller.getById)
    .put([validateToken, isAdmin, upload.single('image'), validateTestimonials], controller.update)
    .delete([validateToken, isAdmin], controller.destroy);

module.exports = router;
