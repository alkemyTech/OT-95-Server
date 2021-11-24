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
    .get([validateToken, isAdmin], controller.getById)
    .put([validateToken, isAdmin, upload.single('image'), validateTestimonials], controller.update)
    .delete([validateToken, isAdmin], controller.destroy);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Testimonials:
 *       type: object
 *       required:
 *         - name
 *         - content
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the testimonial
 *           example: "example testimonial"
 *         content:
 *           type: string
 *           description: Content of the testimonial
 *           example: "This is and example content for a testimonial"
 *         image:
 *           type: string
 *           description: Image of the testimonial
 *           example: "http://placeimg.com/640/480/fashion"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date of creation of the testimonial
 *           example: "2021-11-23T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date of last update of the testimonial
 *           example: "2021-21-23T00:00:00.000Z"
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           description: Date of deletion of the testimonial
 *           example: "2021-21-23T00:00:00.000Z"
 *
 *   requestBodyTestimonial:
 *     description: Testimonial object
 *     required: true
 *     content:
 *       multipart/form-data:
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: example testimonial in swagger
 *             content:
 *               type: string
 *               example: example testimonial content in swagger
 *             image:
 *               type: string
 *               format: binary
 *         encoding:
 *           image:
 *             contentType: image/*
 *
 * /testimonials:
 *   get:
 *     summary: Get all testimonials
 *     description: Get all testimonials in the api
 *     tags:
 *       - Testimonials
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *
 *     responses:
 *       200:
 *         description: An array of testimonials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 info:
 *                   type: object
 *                   properties:
 *                     count:
 *                       type: integer
 *                       description: Total number of testimonials
 *                       example: 10
 *                     pages:
 *                       type: integer
 *                       description: Total number of pages
 *                       example: 2
 *                     next:
 *                       type: string
 *                       description: Next page URL
 *                       example: "http://localhost:8080/api/testimonials?page=2"
 *                     prev:
 *                       type: string
 *                       description: Previous page URL
 *                       example: "http://localhost:8080/api/testimonials?page=1"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: Id of the testimonial
 *                         example: 1
 *                       name:
 *                         type: string
 *                         description: Name of the testimonial
 *                         example: "example testimonial"
 *                       content:
 *                         type: string
 *                         description: Content of the testimonial
 *                         example: "example content for a testimonial"
 *                       image:
 *                         type: string
 *                         description: Image url of the testimonial
 *                         example: "http://placeimg.com/640/480/fashion"
 *
 *       204:
 *          $ref: '#/components/responses/noContent'
 *
 *       400:
 *          $ref: '#/components/responses/badRequestError'
 *
 *       403:
 *          $ref: '#/components/responses/forbidden'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 *
 *   post:
 *     summary: Create a new testimonial
 *     description: Create a new testimonial
 *     tags:
 *       - Testimonials
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodyTestimonial'
 *     responses:
 *       201:
 *         description: Successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Successfully created
 *                 data:
 *                   $ref: '#/components/schemas/Testimonials'
 *       400:
 *          $ref: '#/components/responses/badRequestError'
 *
 *       403:
 *          $ref: '#/components/responses/forbidden'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 *
 * /testimonials/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *         example: 1
 *       required: true
 *
 *   get:
 *     summary: Get a testimonial by ID
 *     description: Get a testimonial by ID
 *     tags:
 *       - Testimonials
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Testimonials'
 *       400:
 *          $ref: '#/components/responses/badRequestError'
 *
 *       403:
 *          $ref: '#/components/responses/forbidden'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 *
 *   put:
 *     summary: Update a testimonial by ID
 *     description: Update a testimonial by ID
 *     tags:
 *       - Testimonials
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodyTestimonial'
 *     responses:
 *       200:
 *         description: Successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Successfully updated
 *       400:
 *          $ref: '#/components/responses/badRequestError'
 *
 *       403:
 *          $ref: '#/components/responses/forbidden'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 *
 *   delete:
 *     summary: Delete a testimonial by ID
 *     description: Delete a testimonial by ID
 *     tags:
 *       - Testimonials
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Successfully deleted
 *       400:
 *          $ref: '#/components/responses/badRequestError'
 *
 *       403:
 *          $ref: '#/components/responses/forbidden'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 */

