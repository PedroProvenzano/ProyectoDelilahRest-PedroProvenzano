const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido");

router.delete("/", async (req, res) => {
  if (!req.body.DeleteID) {
    return res.status(400).send("Falta Pedido (DeleteID)");
  }
  const pedido = await Pedido.findOne({
    where: { order_id: req.body.DeleteID },
  });
  pedido.destroy();

  return res.status(201).send(`Pedido con ID ${req.body.DeleteID} eliminado`);
});

module.exports = router;
