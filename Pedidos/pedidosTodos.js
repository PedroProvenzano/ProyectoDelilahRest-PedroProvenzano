const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido");
const Usuario = require("../models/Usuario");
const Plato = require("../models/Plato");

router.get("/", async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      attributes: { exclude: ["updatedAt"] },
      include: [
        {
          model: Plato,
          attributes: {
            exclude: ["meal_id", "updatedAt", "createdAt"],
          },
        },
        {
          model: Usuario,
          attributes: {
            exclude: [
              "user_id",
              "password",
              "isAdmin",
              "updatedAt",
              "createdAt",
            ],
          },
        },
      ],
    });
    return res.status(200).json(pedidos);
  } catch (err) {
    console.log(err);
    return res.status(404).json(err);
  }
});
module.exports = router;
