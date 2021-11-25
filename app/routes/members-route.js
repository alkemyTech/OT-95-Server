const express = require('express');
const membersController = require('../controllers/members-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const validateJwt = require('../middlewares/validate-jwt');
const { validateCreation, existMember } = require('../middlewares/members-middlewares');

const router = express.Router();

router.post('/', [validateJwt, isAdmin, ...validateCreation], membersController.create);

router.get('/', [validateJwt, isAdmin], membersController.getAll);

router.get('/:id', [validateJwt, isAdmin], membersController.getById);

router.put('/:id', [validateJwt, isAdmin, ...existMember], membersController.update);

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
 *           description: The member's name.
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
 *           example: image.jpg
 *         description:
 *           type: string
 *           description: Description of the member.
 *           example: Rodrigo Fuente description
 *
 * /members:
 *
 *   get:
 *     summary: Get all members
 *     description: Get all members
 *     tags:
 *       - Members
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
 *                       example: "http://localhost:3000/api/members?page=2"
 *                     prev:
 *                       type: string
 *                       description: Previous page URL
 *                       example: "http://localhost:3000/api/members?page=1"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The member ID.
 *                         example: 1
 *                       name:
 *                         type: string
 *                         description: The member's name.
 *                         example: Rodrigo Fuente
 *                       facebookUrl:
 *                         type: string
 *                         description: Facebook url of the member.
 *                         example: facebook.com/RodrigoFuente
 *                       instagramUrl:
 *                         type: string
 *                         description: Instagram url of the member.
 *                         example: instagram.com/RodrigoFuente
 *                       LinkedinUrl:
 *                         type: string
 *                         description: Linkedin url of the member.
 *                         example: linkedin.com/RodrigoFuente
 *                       image:
 *                         type: string
 *                         description: Image of the member.
 *                         example: image.jpg
 *                       description:
 *                         type: string
 *                         description: Description of the member.
 *                         example: Rodrigo Fuente description
 *       204:
 *         $ref: '#/components/responses/noContent'
 *
 *   post:
 *     summary: Create a member.
 *     description: Create a member.
 *     tags:
 *       - Members
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The member's name.
 *                 example: Rodrigo Fuente
 *               image:
 *                 type: string
 *                 description: Image of the member.
 *                 example: image.jpg
 *               description:
 *                 type: string
 *                 description: Description of the member.
 *                 example: Rodrigo Fuente description
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
 * /members/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: id of the member.
 *       schema:
 *         type: integer
 *
 *   get:
 *     summary: Get a member by id
 *     description: Get a member by id
 *     tags:
 *       - Members
 *     responses:
 *       200:
 *         description: One member
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The member ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The member's name.
 *                       example: Rodrigo Fuente
 *                     facebookUrl:
 *                       type: string
 *                       description: Facebook url of the member.
 *                       example: facebook.com/RodrigoFuente
 *                     instagramUrl:
 *                       type: string
 *                       description: Instagram url of the member.
 *                       example: instagram.com/RodrigoFuente
 *                     LinkedinUrl:
 *                       type: string
 *                       description: Linkedin url of the member.
 *                       example: linkedin.com/RodrigoFuente
 *                     image:
 *                       type: string
 *                       description: Image of the member.
 *                       example: image.jpg
 *                     description:
 *                       type: string
 *                       description: Description of the member.
 *                       example: Rodrigo Fuente description
 *
 *   put:
 *     summary: Update a member by id
 *     description: Get a member by id
 *     tags:
 *       - Members
 *     responses:
 *       200:
 *         description: One member
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The member ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The member's name.
 *                       example: Rodrigo Fuente
 *                     facebookUrl:
 *                       type: string
 *                       description: Facebook url of the member.
 *                       example: facebook.com/RodrigoFuente
 *                     instagramUrl:
 *                       type: string
 *                       description: Instagram url of the member.
 *                       example: instagram.com/RodrigoFuente
 *                     LinkedinUrl:
 *                       type: string
 *                       description: Linkedin url of the member.
 *                       example: linkedin.com/RodrigoFuente
 *                     image:
 *                       type: string
 *                       description: Image of the member.
 *                       example: image.jpg
 *                     description:
 *                       type: string
 *                       description: Description of the member.
 *                       example: Rodrigo Fuente description
 *
 *   delete:
 *     summary: Delete a member by id
 *     description: Get a member by id
 *     tags:
 *       - Members
 *     responses:
 *       200:
 *         description: One member
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The member ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The member's name.
 *                       example: Rodrigo Fuente
 *                     facebookUrl:
 *                       type: string
 *                       description: Facebook url of the member.
 *                       example: facebook.com/RodrigoFuente
 *                     instagramUrl:
 *                       type: string
 *                       description: Instagram url of the member.
 *                       example: instagram.com/RodrigoFuente
 *                     LinkedinUrl:
 *                       type: string
 *                       description: Linkedin url of the member.
 *                       example: linkedin.com/RodrigoFuente
 *                     image:
 *                       type: string
 *                       description: Image of the member.
 *                       example: image.jpg
 *                     description:
 *                       type: string
 *                       description: Description of the member.
 *                       example: Rodrigo Fuente description
*/
