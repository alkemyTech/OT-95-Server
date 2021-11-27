const express = require('express');

const router = express.Router();
const { create, update, getAll } = require('../controllers/activity-controller');
const { validateCreate } = require('../middlewares/activity-middleware');
const { isAdmin } = require('../middlewares/isAdmin');
const validateJwt = require('../middlewares/validate-jwt');

router.post('/', [validateCreate, validateJwt, isAdmin], create);
router.put('/:id', [validateJwt, isAdmin], update);
router.get('/', [validateJwt, isAdmin], getAll);

module.exports = router;


/**
 * @swagger
 *  components:
 *    schemas:
 *      Activities:
 *          type: object
 *          required:
 *            - name
 *            - content
 *            - createdAt
 *          properties:
 *            name:
 *              type: string
 *              description:  Name of the activity
 *              example: "Deporte"
 *            content:
 *              type: string
 *              description: Content of the activity
 *              example: "content deporte"
 *            image:
 *              type: string
 *              description: Image of activity
 *              example: "https://www.image.com/image.jpg"
 *            createdAt:
 *              type: string
 *              format: date-time
 *              description: Date Creation of the activity
 *              example: "2021-11-01T00:00:00.000Z"
 *            updatedAt:
 *              type: string
 *              format: date-time
 *              description: Date last update of the activity
 *              example: "2021-11-01T00:00:00.000Z"
 *            deletedAt:
 *              type: string
 *              format: date-time
 *              description: Date Deletion of the activity
 *              example: "2021-11-01T00:00:00.000Z"
 * /activities:
 *      post:
 *           sumary: Create a new Activity
 *           description: Create a new Activity
 *           tags:
 *              - Activities
 *           responses:
 *              '201':
 *                  description:  Succesfully created
 *              '400':
 *                  description: Bad request
 *           requestBody:
 *            required: true
 *            content:
 *               application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      name:
 *                       type: string
 *                       description: The activity name.
 *                       example: deporte
 *                      content:
 *                       type: string
 *                       description: The content activity
 *                       example: content activity
 *                      image:
 *                       type: string
 *                       description: The image activity
 *                       example: imageactivity.jpg
 *      get:
 *          description: Get all categories with pagination
 *          tags:
 *              - Activities
 *          security:
 *              - bearerAuth: []
 *          responses:
 *              '200':
 *                  description:  Succesfully response
 *              '400':
 *                  description:  Bad request
 * /activities/{id}:
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *         required: true
 *      put:
 *           sumary: update a new Activity
 *           description: update a new Activity
 *           tags:
 *              - Activities
 *           responses:
 *              '20o':
 *                  description:  Succesfully updated
 *              '400':
 *                  description: Bad request
 * 
 *           requestBody:
 *            required: true
 *            content:
 *               application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      name:
 *                       type: string
 *                       description: The activity name.
 *                       example: deporte
 *                      content:
 *                       type: string
 *                       description: The content activity
 *                       example: content activity
 *                      image:
 *                       type: string
 *                       description: The image activity
 *                       example: imageactivity.jpg
*/
