const express = require("express");
const router = express.Router();
const { create } = require("../controllers/activity-controller");
const { validateCreate } = require("../middlewares/activity-middleware");

router.post("/", validateCreate, create);

module.exports = router;
