const express = require("express");
const router = express.Router();
const Plato = require("../models/Plato");

// Cambiar a patch
router.put("/", async (req, res) => {
  const plato = await Plato.findOne({
    where: { mealName: req.body.mealName },
  });
  if (!req.body.price) {
    return res.status(400).send("Falta agregar informacion para editar");
  }
  plato.price = req.body.price;
  await plato.save({ fields: ["price"] });
  await plato.reload();
  return res.status(201).send("Plato actualizado");
});

module.exports = router;
