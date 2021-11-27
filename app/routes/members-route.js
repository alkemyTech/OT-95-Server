const express = require('express');
const multer = require('multer');
const membersController = require('../controllers/members-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const validateJwt = require('../middlewares/validate-jwt');
const { validateCreation, existMember, validateImg } = require('../middlewares/members-middlewares');

const upload = multer({ dest: './temp' });

const router = express.Router();

router.post('/', [
  validateJwt,
  isAdmin,
  upload.single('image'),
  validateImg,
  ...validateCreation
], membersController.create);

router.get('/', [validateJwt, isAdmin], membersController.getAll);

router.get('/:id', [validateJwt, isAdmin], membersController.getById);

router.put('/:id', [
  validateJwt,
  isAdmin,
  upload.single('image'),
  ...existMember
], membersController.update);

router.delete('/:id', [validateJwt, isAdmin, ...existMember], membersController.destroy);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       required:
 *         - name
 *         - image
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the member.
 *           example: Rodrigo Fuente
 *         facebookUrl:
 *           type: string
 *           description: Facebook url of the member.
 *           example: facebook.com/RodrigoFuente
 *         instagramUrl:
 *           type: string
 *           description: Instagram url of the member.
 *           example: instagram.com/RodrigoFuente
 *         LinkedinUrl:
 *           type: string
 *           description: Linkedin url of the member.
 *           example: linkedin.com/RodrigoFuente
 *         image:
 *           type: string
 *           description: Image of the member.
 *           example: https://alkemy-ong-md.s3.amazonaws.com/7216d1bc-30ec-4a11-b136-bf3a2a921078.jpg
 *         description:
 *           type: string
 *           description: Description of the member.
 *           example: Rodrigo Fuente description
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date of creation of the Member
 *           example: "2021-11-25T18:31:36.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date of last update of the Member
 *           example: "2021-11-25T18:31:36.000Z"
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           description: Date of deletion of the Member
 *           example: null
 *
 *   requestBodyMember:
 *     description: Member object
 *     required: true
 *     content:
 *       multipart/form-data:
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: Name of the member.
 *               example: Rodrigo Fuente
 *             facebookUrl:
 *               type: string
 *               description: Facebook url of the member.
 *               example: facebook.com/RodrigoFuente
 *             instagramUrl:
 *               type: string
 *               description: Instagram url of the member.
 *               example: instagram.com/RodrigoFuente
 *             LinkedinUrl:
 *               type: string
 *               description: Linkedin url of the member.
 *               example: linkedin.com/RodrigoFuente
 *             image:
 *               type: string
 *               format: binary
 *               description: Image of the member.
 *             description:
 *               type: string
 *               description: Description of the member.
 *               example: Rodrigo Fuente description
 *         encoding:
 *           image:
 *             contentType: image/*
 *
 * /members:
 *
 *   get:
 *     summary: Get all members
 *     description: Get all members
 *     tags:
 *       - Members
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         description: Number of page.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: An array of Members.
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
 *                       description: Total number of members
 *                       example: 25
 *                     pages:
 *                       type: integer
 *                       description: Total number of pages
 *                       example: 3
 *                     next:
 *                       type: string
 *                       description: Next page URL
 *                       example: "http://localhost:3000/api/members?page=3"
 *                     prev:
 *                       type: string
 *                       description: Previous page URL
 *                       example: "http://localhost:3000/api/members?page=1"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Member'
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
 *     summary: Create a member.
 *     description: Create a member.
 *     tags:
 *       - Members
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodyMember'
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
 *                   $ref: '#/components/schemas/Member'
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
 * /members/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: id of the member.
 *       schema:
 *         type: integer
 *         example: 1
 *
 *   get:
 *     summary: Get a member by Id
 *     description: Get a member by Id
 *     tags:
 *       - Members
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
 *                   $ref: '#/components/schemas/Member'
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
 *     summary: Update a member by Id
 *     description: Update a member by Id
 *     tags:
 *       - Members
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the member.
 *                 example: Rodrigo Fuente
 *               facebookUrl:
 *                 type: string
 *                 description: Facebook url of the member.
 *                 example: facebook.com/RodrigoFuente
 *               instagramUrl:
 *                 type: string
 *                 description: Instagram url of the member.
 *                 example: instagram.com/RodrigoFuente
 *               LinkedinUrl:
 *                 type: string
 *                 description: Linkedin url of the member.
 *                 example: linkedin.com/RodrigoFuente
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image of the member.
 *               description:
 *                 type: string
 *                 description: Description of the member.
 *                 example: Rodrigo Fuente description
 *           encoding:
 *             image:
 *               contentType: image/*
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
 *                   $ref: '#/components/schemas/Member'
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
 *     summary: Delete a member by Id
 *     description: Delete a member by Id
 *     tags:
 *       - Members
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
