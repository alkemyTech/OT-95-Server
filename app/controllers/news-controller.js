const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');
const newsService = require('../services/news-service');
const commentsService = require('../services/comments-service');
/**
* @swagger
* components:
*  securitySchemes:
*    bearerAuth:            
*      type: http
*      scheme: bearer
*      bearerFormat: JWT
*  schemas: 
*     Novedad:
*       type: Object
*       properties:
*         name: 
*           type: string
*           description: Nombre o titulo de la novedad
*         image: 
*           type: string
*           description: Path de la imagen
*         content: 
*           type: string
*           description: Contenido de la novedad
*       required:
*         - name
*         - content 
*       example:
*         name: Colecta de fondos
*         content: Nueva colecta para la organizacion, sumate y colabora.
*         image: happychildren.jpg
*       responses:
*         UnauthorizedError:
*         description: Access token is missing or invalid
*/

/**
 * @swagger
 * /api/getAll:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Listar todas las novedades
 *    tags: [Novedad]    
 *    reponses:
 *      200:
 *        description: Todas las novedades
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Novedad'
 *      400:
 *        description: bad request error
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 */
const getAll = async (req, res) => {
  try {
    const news = await newsService.getAll();
    if (news.length > 0) {
      res.status(codeStatus.RESPONSE_OK).json(news);
    } else {
      res.status(codeStatus.RESPONSE_OK_NO_CONTENT).json(messages.RESPONSE_OK_NO_CONTENT);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};
/**
 * @swagger
 * /api/news/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Obtener una novedad
 *    tags: [Novedad]    
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: id de la novedad
 *    reponses:
 *      200:
 *        description: Novedad
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Novedad'
 *      400: 
 *        description: Novedad no encontrada
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 */
const getById = async (req, res) => {
  try {
    const news = await newsService.getById(req.params.id);

    if (news) {
      res.status(codeStatus.RESPONSE_OK).json(news);
    } else {
      res.status(codeStatus.RESPONSE_OK_NO_CONTENT).json(messages.RESPONSE_OK_NO_CONTENT);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await commentsService.getAllByPost(req.params.id);

    if (comments.length === 0) {
      return res.status(codeStatus.NOT_FOUND_ERROR).json({ data: [] });
    }

    return res.status(codeStatus.RESPONSE_OK).json({ data: comments });
  } catch (err) {
    return res.status(codeStatus.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
  }
};

/**
 * @swagger
 * /api/news:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    summary: Crear una nueva novedad
 *    tags: [Novedad]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/Novedad'
 *    reponses:
 *      200:
 *        description: Nueva novedad creada
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 */
const create = async (req, res) => {
  try {
    const { name, image, content } = req.body;

    const newsCreated = await newsService.create(name, image, content);

    if (newsCreated) {
      res.status(codeStatus.RESPONSE_OK_CREATED).json(messages.RESPONSE_OK_CREATED);
    } else {
      res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};
/**
 * @swagger
 * /api/news/{id}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    summary: Actualizar una novedad
 *    tags: [Novedad]    
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: id de la novedad
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/Novedad'
 *    reponses:
 *      200:
 *        description: Novedad
 *      400: 
 *        description: Novedad no encontrada
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 */
const update = async (req, res) => {
  try {
    const { name, image, content } = req.body;
    const news = await newsService.getById(req.params.id);

    if (news) {
      await newsService.update(req.params.id, name, image, content);
      res.status(codeStatus.RESPONSE_OK).json(messages.RESPONSE_OK);
    } else {
      res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};
/**
 * @swagger
 * /api/news/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Eliminar una novedad
 *    tags: [Novedad]    
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: id de la novedad
 *    reponses:
 *      200:
 *        description: Correcto
 *      400: 
 *        description: Novedad no encontrada
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 */
const destroy = async (req, res) => {
  try {
    const news = await newsService.getById(req.params.id);

    if (news) {
      await newsService.destroy(req.params.id);
      res.status(codeStatus.RESPONSE_OK).json(messages.RESPONSE_OK);
    } else {
      res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
    }
  } catch (err) {
    return res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
  }
};

module.exports = {
  getAll,
  getById,
  getComments,
  create,
  update,
  destroy
};
