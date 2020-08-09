const express = require("express");
const router = express.Router();

const controller = require("../controllers/food.controller");

// getAll
router.get("/", controller.getFood);
router.get("/:id", controller.getFoodbyId);
router.post("/", controller.postFood);

module.exports = router;
