const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");
const Pedido = require("../models/Pedido");
const Plato = require("../models/Plato");

router.post("/", async (req, res) => {
  const user = await Usuario.findOne({
    where: { username: req.body.username },
  });

  let arrayPlatos = req.body.platos;
  let totalPrice = 0;
  let plato = await Plato.findAll({
    where: { mealName: arrayPlatos },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  for (let i of plato) {
    totalPrice += i.dataValues.price;
  }
  const pedido = await Pedido.create({
    payMethod: req.body.payMethod,
    price: totalPrice,
  });
  await pedido.addPlatos(plato);
  await user.addPedido(pedido);
  // await pedido.addUsuario(user);

  let message = {
    msg: "Pedido tomado",
    pedido: pedido,
    plato: plato,
  };

  return res.status(200).json(message);
});

module.exports = router;
