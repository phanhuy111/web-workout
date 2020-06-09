const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create new schema
const userShema = new Schema({
  name: {
    type: String,
    require: true,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
    require: true,
  },
  goal: {
    type: String,
    require: true,
  },
  chronic: {
    type: String,
    require: true,
  },
});

// export schema to use on movie.controller.js
module.exports = User = mongoose.model("User", userShema, "user");
