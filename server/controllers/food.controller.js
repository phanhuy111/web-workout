const Food = require("../models/food.model");

// Get all movies
module.exports.getFood = async (req, res) => {
  const food = await Food.find();
  res.json(food);
};

module.exports.postFood = async (req, res) => {
    const 
};
