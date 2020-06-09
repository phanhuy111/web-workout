const Movie = require("../models/food.model");

// Get all movies
module.exports.getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

//
