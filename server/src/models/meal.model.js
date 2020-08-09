const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create new schema
const mealShema = new Schema({
  name: {
    type: String,
  },
  total: {
    type: String,
    required: true,
  },
  foodId: {
    type: String,
    required: true,
  },
});

// export schema to use on movie.controller.js
module.exports = Meal = mongoose.model("Meal", mealShema, "meal");
