const express = require("express");
const router = express.Router();

const controller = require("../controllers/movie.controller");

// getAll
router.get("/", controller.getFood);
router.post("", controller.postFood);

module.exports = router;
