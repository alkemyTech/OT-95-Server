const express = require('express');
const slidesController = require('../controllers/slides-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const validateJwt = require('../middlewares/validate-jwt');
const { validateCreation, existSlide } = require('../middlewares/slides-middleware');

const router = express.Router();

router.post('/', [validateJwt, isAdmin, ...validateCreation], slidesController.create);

router.get('/', [validateJwt, isAdmin], slidesController.getAll);

router.get('/:id', [validateJwt, isAdmin], slidesController.getById);

router.put('/:id', [validateJwt, isAdmin, ...existSlide], slidesController.update);

router.delete('/:id', [validateJwt, isAdmin, ...existSlide], slidesController.destroy);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Slide:
 *       type: object
 *       required:
 *         - text
 *         - imageUrl
 *         - organizationId
 *       properties:
 *         imageUrl:
 *           type: string
 *           description: Image of the slide.
 *           example: https://alkemy-ong-md.s3.amazonaws.com/7216d1bc-30ec-4a11-b136-bf3a2a921078.jpg
 *         text:
 *           type: string
 *           description: Text of the slide.
 *           example: SlideText
 *         order:
 *           type: integer
 *           description: Order of the slide.
 *           example: 1
 *         organizationId:
 *           type: integer
 *           description: Organization that owns the slide.
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date of creation of the slide
 *           example: "2021-11-25T18:31:36.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date of last update of the slide
 *           example: "2021-11-25T18:31:36.000Z"
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           description: Date of deletion of the slide
 *           example: null
 *
 *   requestBodySlide:
 *     description: Slide object
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             imageUrl:
 *               type: string
 *               description: Image of the slide.
 *               example: base64img
 *             text:
 *               type: string
 *               description: Text of the slide.
 *               example: SlideText
 *             order:
 *               type: integer
 *               description: Order of the slide.
 *               example: 1
 *             organizationId:
 *               type: integer
 *               description: Organization that owns the slide.
 *               example: 1
 *         encoding:
 *           image:
 *             contentType: image/*
 *
 * /slides:
 *
 *   get:
 *     summary: Get all slides
 *     description: Get all slides
 *     tags:
 *       - Slides
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of Slides.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Slide'
 *
 *       400:
 *         $ref: '#/components/responses/badRequestError'
 *
 *       401:
 *         $ref: '#/components/responses/unauthorizedError'
 *
 *       403:
 *         $ref: '#/components/responses/forbidden'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 *
 *   post:
 *     summary: Create a slide.
 *     description: Create a slide.
 *     tags:
 *       - Slides
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodySlide'
 *     responses:
 *       201:
 *         description: Generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Generated successfully
 *                 data:
 *                   $ref: '#/components/schemas/slide'
 *
 *       400:
 *         $ref: '#/components/responses/badRequestError'
 *
 *       401:
 *         $ref: '#/components/responses/unauthorizedError'
 *
 *       403:
 *         $ref: '#/components/responses/forbidden'
 *
 * /slides/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: id of the slide.
 *       schema:
 *         type: integer
 *         example: 1
 *
 *   get:
 *     summary: Get a slide by Id
 *     description: Get a slide by Id
 *     tags:
 *       - Slides
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
 *                   $ref: '#/components/schemas/Slide'
 *
 *       400:
 *         $ref: '#/components/responses/badRequestError'
 *
 *       401:
 *         $ref: '#/components/responses/unauthorizedError'
 *
 *       403:
 *         $ref: '#/components/responses/forbidden'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 *
 *   put:
 *     summary: Update a slide by Id
 *     description: Update a slide by Id
 *     tags:
 *       - Slides
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodySlide'
 *     responses:
 *       200:
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/Slide'
 *
 *       400:
 *         $ref: '#/components/responses/badRequestError'
 *
 *       401:
 *         $ref: '#/components/responses/unauthorizedError'
 *
 *       403:
 *         $ref: '#/components/responses/forbidden'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 *
 *   delete:
 *     summary: Delete a slide by Id
 *     description: Delete a slide by Id
 *     tags:
 *       - Slides
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
 *                   example: Deleted successfully
 *
 *       400:
 *         $ref: '#/components/responses/badRequestError'
 *
 *       401:
 *         $ref: '#/components/responses/unauthorizedError'
 *
 *       403:
 *         $ref: '#/components/responses/forbidden'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
*/
