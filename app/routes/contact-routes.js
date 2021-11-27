const express = require('express');

const router = express.Router();
const { getAll, create } = require('../controllers/contact-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const { contactCreate } = require('../middlewares/contact-middleware');
const validateJwt = require('../middlewares/validate-jwt');

router.get('/', [validateJwt, isAdmin], getAll);
router.post('/', [validateJwt, contactCreate], create);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *    Contact:
 *      type: object
 *      required:
 *        - name
 *        - email
 *      properties:
 *        name:
 *          type: string
 *          example: "John Doe"
 *        email:
 *          type: string
 *          example: "admin@admin.com"
 *        phone:
 *          type: string
 *          example: "123456789"
 *        message:
 *          type: string
 *          example: "Hello, I am John Doe and I would like to contact you."
 *        createdAt:
 *          type: string
 *          format: date-time
 *          example: "2020-01-01T00:00:00.000Z"
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          example: "2020-01-01T00:00:00.000Z"
 *        deletedAt:
 *          type: string
 *          format: date-time
 *          example: "2020-01-01T00:00:00.000Z"
 *
 *  requestBodyContact:
 *    description: Contact object
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *             example: "John Doe"
 *           email:
 *             type: string
 *             example: "admin@admin.com"
 *           phone:
 *             type: string
 *             example: "123456789"
 *           message:
 *             type: string
 *             example: "Hello, I am John Doe and I would like to contact you."
 *
 * /contacts:
 *   get:
 *     tags:
 *       - Contact
 *     description: Returns all contacts
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Contact'
 *       401:
 *         description: Unauthorized
 *         $ref: '#/components/responses/unauthorizedError'
 *       403:
 *         description: Forbidden
 *         $ref: '#/components/responses/forbidden'
 *
 *   post:
 *     tags:
 *       - Contact
 *     description: Create a new contact
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodyContact'
 *
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
 *                   example: "Created successfully"
 *       400:
 *         description: Bad request
 *         $ref: '#/components/responses/badRequestError'
 *       401:
 *         description: Unauthorized
 *         $ref: '#/components/responses/unauthorizedError'
 *
 *
 */
