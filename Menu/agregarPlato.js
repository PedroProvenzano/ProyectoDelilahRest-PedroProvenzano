const express = require("express");
const router = express.Router();
const Plato = require("../models/Plato");

// Crear plato

router.post("/", async (req, res) => {
  try {
    let plato = await Plato.findOne({
      where: { mealName: req.body.mealName },
    });
    if (plato) {
      return res.status(409).send("Plato ya existe");
    }
    Plato.create({
      mealName: req.body.mealName,
      price: req.body.price,
    }).then(() => {
      let meal = {
        mealName: req.body.mealName,
        price: req.body.price,
      };
      res.status(201).json(meal);
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
