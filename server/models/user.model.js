const mongoose = required("mongoose");
const Schema = mongoose.Schema;

// create new schema
const userShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  current_weight: {
    type: String,
    required: true,
  },
  goal_weight: {
    type: String,
    required: true,
  },
  chronic_disease: {
    type: String,
    required: true,
  },
});

// export schema to use on movie.controller.js
module.exports = User = mongoose.model("User", userShema, "user");
