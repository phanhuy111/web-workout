const mongoose = required("mongoose");
const Schema = mongoose.Schema;

// create new schema
const userShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  chronic: {
    type: String,
    required: true,
  },
});

// export schema to use on movie.controller.js
module.exports = User = mongoose.model("User", userShema, "user");
