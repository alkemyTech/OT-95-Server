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
 *      Users:
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
 *      unauthorizedError:
 *        description: UnauthorizedError
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    message:
 *                      type: string
 *                msg:
 *                  type: string
 *
 *      badRequestError:
 *        description: BadRequestError
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: "Bad request"
 *
 *      notFoundError:
 *        description: NotFoundError
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: "Not found"
 *    requestBody:
 *      description: User object
 *      required: true
 *      content:
 *        multipart/form-data:
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
 *              - Users
*/
