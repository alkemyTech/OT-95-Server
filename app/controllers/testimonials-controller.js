const testimonialsService = require('../services/testimonials-service');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {

  all: async (req, res) => {
    try {
      const url = `${req.protocol}://${req.get('host')}${req.baseUrl}`;
      const page = +req.query.page || 1;
      const testimonials = await testimonialsService.getAll(10, page, url);

      if (testimonials.data.length > 0) {
        res.status(codeStatus.RESPONSE_OK).json(testimonials);
      } else {
        res.status(codeStatus.RESPONSE_OK_NO_CONTENT).json({ data: [] });
      }
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  getById: async (req, res) => {
    try {
      const testimonial = await testimonialsService.getById(req.params.id);

      if (testimonial) {
        res.status(codeStatus.RESPONSE_OK).json({ data: testimonial });
      } else {
        res.status(codeStatus.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
      }
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  create: async (req, res) => {
    try {
      req.body.image = req.file;
      const testimonialCreated = await testimonialsService.create(req.body);

      if (testimonialCreated) {
        res.status(codeStatus.RESPONSE_OK_CREATED)
        .json({ message: messages.RESPONSE_OK_CREATED, data: testimonialCreated });
      } else {
        res.status(codeStatus.BAD_REQUEST_ERROR).json({ data: messages.BAD_REQUEST_ERROR });
      }
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      req.body.image = req.file;
      const testimonial = await testimonialsService.update(req.params.id, req.body);

      if (testimonial) {
        res.status(codeStatus.RESPONSE_OK)
        .json({ message: messages.RESPONSE_OK_UPDATED, data: testimonial });
      } else {
        res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
      }
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  destroy: async (req, res) => {
    try {
      const testimonial = await testimonialsService.getById(req.params.id);

      if (testimonial) {
        await testimonialsService.destroy(req.params.id);
        res.status(codeStatus.RESPONSE_OK).json({ message: messages.RESPONSE_OK_DELETED });
      } else {
        res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
      }
    } catch (err) {
      res.status(codeStatus.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

};
