const Food = require("../models/food.model");

// Get all movies
module.exports.getFood = async (req, res, next) => {
  try {
    const food = await Food.find();
    res.json(food);
  } catch (error) {
    return next(error);
  }
};

//

// get food by id
module.exports.getFoodbyId = async (req, res, next) => {
  try {
    let { id } = req.params;
    // Kiểm tra xem id hiện tại có phải là User hay không.
    let foodById = await Food.findById(id);
    res.json(foodById);
    return next();
  } catch (error) {
    return next(error);
  }
};

// post food with admin requirement
module.exports.postFood = async (req, res) => {
  var foodForm = {
    name: req.body.name,
    caloric: req.body.caloric,
    protein: req.body.protein,
    carb: req.body.carb,
    fat: req.body.fat,
  };
  const foodData = new Food({ ...req.body, foodForm });
  let food = await foodData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
};
