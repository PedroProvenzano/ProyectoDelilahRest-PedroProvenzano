const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido");

router.put("/", async (req, res) => {
  const pedido = await Pedido.findOne({
    where: { order_id: req.body.orderID },
  });
  if (!req.body.orderState) {
    return res.status(400).send("Falta agregar informacion para editar");
  }
  pedido.orderState = req.body.orderState;
  await pedido.save({ fields: ["orderState"] });
  await pedido.reload();
  return res.status(201).send(`Pedido actualizado a ${req.body.orderState}`);
});

module.exports = router;
