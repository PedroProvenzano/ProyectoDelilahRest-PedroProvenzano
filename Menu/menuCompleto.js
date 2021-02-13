const express = require("express");
const router = express.Router();
const Plato = require("../models/Plato");

router.get("/", async (req, res) => {
  const platos = await Plato.findAll({
    attributes: ["mealName", "price"],
  });
  return res.status(200).json(platos);
});

module.exports = router;
