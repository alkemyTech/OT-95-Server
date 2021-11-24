const slidesService = require('../services/slides-service');
const status = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
  getById: async (req, res) => {
    try {
      const slide = await slidesService.getById(req.params.id);

      if (!slide) {
        return res.status(status.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
      }

      return res.status(status.RESPONSE_OK).json({ data: slide });
    } catch (error) {
      return res.status(status.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  getAll: async (req, res) => {
    try {
      const page = Number(req.query.page) || 1;
      const url = `${req.protocol}://${req.get('host')}${req.baseUrl}`;
      const slides = await slidesService.getAll(page, url);

      if (slides.data.length === 0) {
        return res.status(status.NOT_FOUND_ERROR).json({ data: [] });
      }

      return res.status(status.RESPONSE_OK).json(slides);
    } catch (error) {
      return res.status(status.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  create: async (req, res) => {
    try {
      const slide = await slidesService.create(req.body);

      return res.status(status.RESPONSE_OK_CREATED).json({
        message: messages.RESPONSE_OK_CREATED,
        data: slide
      });
    } catch (error) {
      return res.status(status.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      const slide = await slidesService.update(req.params.id, req.body);

      return res.status(status.RESPONSE_OK).json({
        message: messages.RESPONSE_OK_UPDATED,
        data: slide
      });
    } catch (error) {
      return res.status(status.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  },

  destroy: async (req, res) => {
    try {
      await slidesService.destroy(req.params.id);

      return res.status(status.RESPONSE_OK).json({ message: messages.RESPONSE_OK_DELETED });
    } catch (error) {
      return res.status(status.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
  }
};
