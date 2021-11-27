const express = require('express');
const multer = require('multer');

const router = express.Router();
const categoriesController = require('../controllers/categories-controller');
const { validateCreate, validateUpdate } = require('../middlewares/categories-middleware');
const validateJWT = require('../middlewares/validate-jwt');
const { isAdmin } = require('../middlewares/isAdmin');

const upload = multer({ dest: './temp' });

// GET all categories by name.
router.get('/', validateJWT, categoriesController.getAll);

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

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the category
 *           example: "Category 1"
 *         description:
 *           type: string
 *           description: Description of the category
 *           example: "This is the first category"
 *         image:
 *           type: string
 *           description: Image of the category
 *           example: "https://www.example.com/image.png"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date of creation of the category
 *           example: "2019-01-01T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date of last update of the category
 *           example: "2019-01-01T00:00:00.000Z"
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           description: Date of deletion of the category
 *           example: "2019-01-01T00:00:00.000Z"
 *
 *   responses:
 *
 *   requestBodyCategories:
 *     description: Category object
 *     required: true
 *     content:
 *       multipart/form-data:
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: Category name
 *             description:
 *               type: string
 *               example: Category description
 *             image:
 *               type: string
 *               format: binary
 *         encoding:
 *           image:
 *             contentType: image/*
 *
 * /categories:
 *   get:
 *     summary: Get all categories
 *     description: Get all categories with pagination
 *     tags:
 *       - Categories
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
 *         description: An array of categories
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
 *                       description: Total number of categories
 *                       example: 10
 *                     pages:
 *                       type: integer
 *                       description: Total number of pages
 *                       example: 2
 *                     next:
 *                       type: string
 *                       description: Next page URL
 *                       example: "http://localhost:8080/api/categories?page=2"
 *                     prev:
 *                       type: string
 *                       description: Previous page URL
 *                       example: "http://localhost:8080/api/categories?page=1"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Name of the category
 *                         example: "Category 1"
 *
 *       204:
 *          $ref: '#/components/responses/noContent'
 *       401:
 *          $ref: '#/components/responses/unauthorized'
 *   post:
 *     summary: Create a new category
 *     description: Create a new category
 *     tags:
 *       - Categories
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodyCategories'
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
 *                   $ref: '#/components/schemas/Category'
 *       400:
 *         $ref: '#/components/responses/badRequestError'
 *       401:
 *         $ref: '#/components/responses/unauthorizedError'
 *       403:
 *         $ref: '#/components/responses/forbidden'
 *
 * /categories/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *         example: 1
 *       required: true
 *
 *   get:
 *     summary: Get a category by ID
 *     description: Get a category by ID
 *     tags:
 *       - Categories
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
 *                   $ref: '#/components/schemas/Category'
 *       404:
 *         $ref: '#/components/responses/notFoundError'
 *       401:
 *         $ref: '#/components/responses/unauthorizedError'
 *       403:
 *         $ref: '#/components/responses/forbidden'
 *
 *   put:
 *     summary: Update a category by ID
 *     description: Update a category by ID
 *     tags:
 *       - Categories
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodyCategories'
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
 *       403:
 *         $ref: '#/components/responses/forbidden'
 *       400:
 *         $ref: '#/components/responses/badRequestError'
 *
 *   delete:
 *     summary: Delete a category by ID
 *     description: Delete a category by ID
 *     tags:
 *       - Categories
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
 *       403:
 *         $ref: '#/components/responses/forbidden'
 *       400:
 *         $ref: '#/components/responses/badRequestError'
 */

