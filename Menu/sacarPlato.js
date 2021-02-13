const express = require("express");
const router = express.Router();
const Plato = require("../models/Plato");

router.delete("/", async (req, res) => {
  if (!req.body.mealDelete) {
    return res.status(400).send("Falta plato (mealDelete)");
  }
  const plato = await Plato.findOne({
    where: { mealName: req.body.mealDelete },
  });
  plato.destroy();

  return res.status(201).send(`Plato ${req.body.mealDelete} eliminado`);
});

module.exports = router;
