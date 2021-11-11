const slidesService = require('../services/slides-service');

module.exports = {
  getById: async (req, res) => {
    const slide = await slidesService.getById(req.params.id);
    return res.status(slide.status).json(slide.response);
  },
  getAll: async (req, res) => {
    const slides = await slidesService.getAll();
    return res.status(slides.status).json(slides.response);
  },
  create: async (req, res) => {
    const slide = await slidesService.create(req.files.file);
    return res.status(slide.status).json(slide.response);
  },
  update: async (req, res) => {
    const slide = await slidesService.update(req.params.id, req.body);
    return res.status(slide.status).json(slide.response);
  },
  destroy: async (req, res) => {
    const slide = await slidesService.destroy(req.params.id);
    return res.status(slide.status).json(slide.response);
  }
};
