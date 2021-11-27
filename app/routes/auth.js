const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users-controller');
const decodeToken = require('../middlewares/decode-token');
const { registerValidate, loginValidate } = require('../middlewares/user-middleware');

router.post('/register', registerValidate, usersController.createUser);

router.post('/login', loginValidate, usersController.login);

router.get('/me', decodeToken);

module.exports = router;

/**
 * @swagger
 *  components:
 *    schemas:
 *      Users (auth):
 *          type: object
 *          required:
 *            - firstName
 *            - lastName
 *            - email
 *            - password
 *            - image
 *          properties:
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
 *    responses:
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
 * /auth/register:
 *      post:
 *           sumary: Create a new User
 *           description: Create a new User
 *           tags:
 *              - Users (auth)
 *           requestBody:
 *             $ref: '#/components/requestBody'
 *           responses:
 *             201:
 *               description: Generated successfully
 *               content:
 *                 application/json:
 *                   schema:
 *                     type: object
 *                     properties:
 *                       message:
 *                         type: string
 *                         example: Generated successfully
 *                       data:
 *                         $ref: '#/components/schemas/Users (auth)'
 *                       token:
 *                         type: string
 *                         example:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Imlk
 *             400:
 *               $ref: '#/components/responses/badRequestError'
 *             401:
 *               $ref: '#/components/responses/unauthorizedError'
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: string
 *            description: Email of User
 *            example: "user123@gmail.com"
 *          password:
 *            type: string
 *            description: Password of user
 *            example: 01a2s34P
 *
 * /auth/login:
 *      post:
 *          sumary: Login User
 *          description: Login User
 *          tags:
 *            - Users (auth)
 *          requestBody:
 *            required: true
 *            content:
 *               application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      email:
 *                       type: string
 *                       description: The user email.
 *                       example: admin@admin.com
 *                      password:
 *                       type: string
 *                       description: The user password
 *                       example: 123456
 *          responses:
 *            200:
 *              description: OK
 *              content:
 *                application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      message:
 *                        type: string
 *                        example: OK
 *                      data:
 *                        $ref: '#/components/schemas/Users (auth)'
 *                      token:
 *                        type: string
 *                        example:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Imlk
 *            400:
 *              $ref: '#/components/responses/badRequestError'
 *            401:
 *              $ref: '#/components/responses/unauthorizedError'
 * /auth/me:
 *     get:
 *       sumary: Data User
 *       description: Data User
 *       tags:
 *         - Users (auth)
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Successfully retrieved
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   data:
 *                     $ref: '#/components/schemas/Users (auth)'
 *         404:
 *           $ref: '#/components/responses/notFoundError'
 *         401:
 *           $ref: '#/components/responses/unauthorizedError'
*/
