const testimonialsService = require('../services/testimonials-service');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {

  all: async (req, res) => {
    try {
      const testimonials = await testimonialsService.getAll();

      if (testimonials.length > 0) {
        res.status(codeStatus.RESPONSE_OK).json(testimonials);
      } else {
        res.status(codeStatus.RESPONSE_OK_NO_CONTENT).json(messages.RESPONSE_OK_NO_CONTENT);
      }
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },

  getById: async (req, res) => {
    try {
      const testimonial = await testimonialsService.getById(req.params.id);

      if (testimonial) {
        res.status(codeStatus.RESPONSE_OK).json(testimonial);
      } else {
        res.status(codeStatus.RESPONSE_OK_NO_CONTENT).json(messages.RESPONSE_OK_NO_CONTENT);
      }
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },

  create: async (req, res) => {
    try {
      const { name, image, content } = req.body;
      const testimonialCreated = await testimonialsService.create(name, image, content);

      if (testimonialCreated) {
        res.status(codeStatus.RESPONSE_OK_CREATED).json(messages.RESPONSE_OK_CREATED);
      } else {
        res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
      }
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },

  update: async (req, res) => {
    try {
      const testimonial = await testimonialsService.update(req.params.id, req.body);

      if (testimonial) {
        res.status(codeStatus.RESPONSE_OK).json(testimonial);
      } else {
        res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
      }
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },

  destroy: async (req, res) => {
    try {
      const testimonial = await testimonialsService.getById(req.params.id);

      if (testimonial) {
        await testimonialsService.destroy(req.params.id);
        res.status(codeStatus.RESPONSE_OK).json(messages.RESPONSE_OK);
      } else {
        res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR);
      }
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },

};
