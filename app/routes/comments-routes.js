const express = require('express');

const router = express.Router();
const controller = require('../controllers/comments-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const validateToken = require('../middlewares/validate-jwt');
const { commentCreate, commentUpdate, commentIsYours } = require('../middlewares/comments-middleware');


router.route('/')
  .get([validateToken, isAdmin], controller.getAll)
  .post([validateToken, commentCreate], controller.create);

router.route('/:id')
  .put([validateToken, commentUpdate, commentIsYours], controller.update)
  .delete([validateToken, commentIsYours], controller.delete);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Comments:
 *       type: object
 *       required:
 *         - userId
 *         - body
 *         - newsId
 *       properties:
 *         userId:
 *           type: integer
 *           description: Id of the user the create comment
 *           example: 1
 *         body:
 *           type: string
 *           description: Content f the comment
 *           example: "This is a really great news"
 *         newsId:
 *           type: integer
 *           description: Id of the news the comment belongs
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date of creation of the comment
 *           example: "2019-01-01T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date of last update of the comment
 *           example: "2019-01-01T00:00:00.000Z"
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           description: Date of deletion of the comment
 *           example: "2019-01-01T00:00:00.000Z"
 *
 *   requestBodyComment:
 *     description: Comment object
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: integer
 *               example: 1
 *             body:
 *               type: string
 *               example: "this is a really great news"
 *             newsId:
 *               type: integer
 *               example: 1
 *
 *   requestBodyCommentUpdate:
 *     description: Comment object
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             body:
 *               type: string
 *               example: "this is an example of the content in a comment updated"
 *
 * /comments:
 *   get:
 *     summary: Get all comments
 *     description: Get all comments order by date of creation
 *     tags:
 *       - Comments
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: An array of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       body:
 *                         type: string
 *                         description: content of the comment
 *                         example: "hello this is and example comment"
 *
 *       204:
 *          $ref: '#/components/responses/noContent'
 *
 *       401:
 *          $ref: '#/components/responses/unauthorizedError'
 *
 *       403:
 *          $ref: '#/components/responses/forbidden'
 *
 *       400:
 *          $ref: '#/components/responses/badRequestError'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 *
 *   post:
 *     summary: Create a new comment
 *     description: Create a new comment
 *     tags:
 *       - Comments
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodyComment'
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
 *                   $ref: '#/components/schemas/Comments'
 *       401:
 *          $ref: '#/components/responses/unauthorizedError'
 *
 *       403:
 *          $ref: '#/components/responses/forbidden'
 *
 *       400:
 *          $ref: '#/components/responses/badRequestError'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 *
 * /comments/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *         example: 1
 *       required: true
 *
 *   put:
 *     summary: Update a comment by ID
 *     description: Update a comment by ID
 *     tags:
 *       - Comments
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodyCommentUpdate'
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
 *                   $ref: '#/components/schemas/Comments'
 *       401:
 *          $ref: '#/components/responses/unauthorizedError'
 *
 *       403:
 *          $ref: '#/components/responses/forbidden'
 *
 *       400:
 *          $ref: '#/components/responses/badRequestError'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 *
 *   delete:
 *     summary: Delete a comment by ID
 *     description: Delete a comment by ID
 *     tags:
 *       - Comments
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
 *       401:
 *          $ref: '#/components/responses/unauthorizedError'
 *
 *       403:
 *          $ref: '#/components/responses/forbidden'
 *
 *       400:
 *          $ref: '#/components/responses/badRequestError'
 *
 *       404:
 *          $ref: '#/components/responses/notFoundError'
 */

