const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create new schema
const foodShema = new Schema({
  name: {
    type: String,
  },
  caloric: {
    type: String,
  },
  protein: {
    type: String,
    require: true,
  },
  carb: {
    type: String,
    require: true,
  },
  fat: {
    type: String,
    require: true,
  },
});

// export schema to use on movie.controller.js
module.exports = Food = mongoose.model("Food", foodShema, "food");
