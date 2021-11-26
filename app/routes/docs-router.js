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
        description: 'Unauthorized error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Unauthorized user credentials'
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
        description: 'Bad request error',
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
        description: 'Not found error',
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
