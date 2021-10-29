const {
  create,
  getAll,
  getById,
  remove,
  update,
} = require('../services/repositories/activity-repository');

const activityController = {
  getAll: async (req, res) => {
    const response = await getAll();

    res.json({ response });
  },
  getById: async (req, res) => {
    const id = req.params.id;

    const response = await getById(id);

    res.json({ response });
  },
  create: async (req, res) => {
    const activity = req.body;

    const response = await create(activity);

    res.json({ response });
  },
  update: async (req, res) => {
    const id = req.params.id;
    const activity = req.body;

    const response = await update(id, activity);
    res.json({ response });
  },
  remove: async (req, res) => {
    const id = req.params.id;

    const response = await remove(id);
    res.json({ response });
  },
};

module.exports = activityController;
