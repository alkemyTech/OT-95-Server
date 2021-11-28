const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users-controller');
const validateJwt = require('../middlewares/validate-jwt');
const { isAdmin } = require('../middlewares/isAdmin');
const { isOwnerShip } = require('../middlewares/ownership-middleware');
const { registerValidate, updateValidate } = require('../middlewares/user-middleware');

router.get('/', [validateJwt, isAdmin], usersController.getAll);

router.get('/:id', [validateJwt, isOwnerShip], usersController.getOne);

router.post('/', [validateJwt, isAdmin, registerValidate], usersController.createUser);

router.put('/:id', [validateJwt, isOwnerShip, updateValidate], usersController.updateUser);

router.delete('/:id', [validateJwt, isOwnerShip], usersController.deleteUser);

module.exports = router;


/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *         - image
 *       properties:
 *            firstName:
 *              type: string
 *              description: First Name of the User
 *              example: "Jimena"
 *            lastName:
 *              type: string
 *              description: Last Name of the User
 *              example: "Sanchez"
 *            email:
 *              type: string
 *              description: Email of User
 *              example: "user123@gmail.com"
 *            password:
 *              type: string
 *              description: Password of user
 *              example: 01a2s34P
 *            image:
 *              type: string
 *              description: Image of User
 *              example: "https://www.image.com/image.jpg"
 *            createdAt:
 *              type: string
 *              format: date-time
 *              description: Date Creation of the User
 *              example: "2021-11-01T00:00:00.000Z"
 *            updatedAt:
 *              type: string
 *              format: date-time
 *              description: Date last update of the User
 *              example: "2021-11-01T00:00:00.000Z"
 *            deletedAt:
 *              type: string
 *              format: date-time
 *              description: Date Deletion of the User
 *              example: "2021-11-01T00:00:00.000Z"
 *
 *   responses:
 *
 *    requestBody:
 *      description: User object
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              firstName:
 *                type: string
 *                example: Jimena
 *              lastName:
 *                type: string
 *                example: Sanchez
 *              email:
 *                type: string
 *                example: user123@gmail.com
 *              password:
 *                type: string
 *                example: pa55w0rd
 *              image:
 *                type: string
 *                format: binary
 *          encoding:
 *            image:
 *              contentType: image/*
 *
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Get all users
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Name of the user
 *                         example: "User 1"
 *
 *       204:
 *          $ref: '#/components/responses/noContent'
 *
 *   post:
 *     summary: Create a new user
 *     description: Create a new user
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBody'
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
 *                   $ref: '#/components/schemas/Users'
 *       400:
 *         $ref: '#/components/responses/badRequestError'
 *       401:
 *         $ref: '#/components/responses/unauthorizedError'
 *
 * /users/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *         example: 1
 *       required: true
 *
 *   get:
 *     summary: Get a user by ID
 *     description: Get a user by ID
 *     tags:
 *       - Users
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
 *                   $ref: '#/components/schemas/Users'
 *       404:
 *         $ref: '#/components/responses/notFoundError'
 *       401:
 *         $ref: '#/components/responses/unauthorizedError'
 *
 *   put:
 *     summary: Update a user by ID
 *     description: Update a user by ID
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBody'
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
 *       401:
 *         $ref: '#/components/responses/unauthorizedError'
 *       400:
 *         $ref: '#/components/responses/badRequestError'
 * 
 *   delete:
 *     summary: Delete a User by ID
 *     description: Delete a User by ID
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Successfully deleted
 *       401:
 *         $ref: '#/components/responses/unauthorizedError'
 *       400:
 *         $ref: '#/components/responses/badRequestError'
 */
