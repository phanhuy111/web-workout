const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create new schema
const chronicShema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
    require,
  },
});

// export schema to use on movie.controller.js
module.exports = Chronic = mongoose.model("Chronic", chronicShema, "chronic");
