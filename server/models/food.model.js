const mongoose = required("mongoose");
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
    required: true,
  },
  carb: {
    type: String,
    required: true,
  },
  fat: {
    type: String,
    required: true,
  },
});

// export schema to use on movie.controller.js
module.exports = Food = mongoose.model("Food", foodShema, "food");
