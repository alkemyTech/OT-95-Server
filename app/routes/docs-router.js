const express = require('express');

const router = express.Router();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API ONG Somos Mas',
    version: '0.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Development server'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    },
    responses: {

      unauthorizedError: {
        description: 'UnauthorizedError',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Unauthorized user credentialsss'
                }
              }
            }
          }
        }
      },

      forbidden: {
        description: 'forbidden',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'forbidden'
                }
              }
            }
          }
        }
      },

      badRequestError: {
        description: 'BadRequestError',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Bad request'
                }
              }
            }
          }
        }
      },

      notFoundError: {
        description: 'notFoundError',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Not found'
                }
              }
            }
          }
        }
      },

      noContent: {
        description: 'No content',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                data: {
                  type: 'array',
                  example: []
                }
              }
            }
          }
        }
      }

    }
  },
};

const options = {
  swaggerDefinition,
  apis: [`${__dirname}/*.js`],
};

const swaggerSpec = swaggerJSDoc(options);

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;
