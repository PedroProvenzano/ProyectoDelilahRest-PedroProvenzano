const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido");
const Usuario = require("../models/Usuario");
const Plato = require("../models/Plato");

router.get("/", async (req, res) => {
  try {
    if (req.body.orderID == null) {
      const user = await Usuario.findOne({
        where: { username: req.body.username },
        attributes: ["username"],
        include: [
          {
            model: Pedido,
            include: [{ model: Plato, attributes: ["mealName", "price"] }],
            attributes: ["orderState", "payMethod", "price", "createdAt"],
            through: { attributes: [] },
          },
        ],
      });
      return res.status(200).json(user);
    } else {
      let orderID = req.body.orderID;
      const user = await Usuario.findOne({
        where: { username: req.body.username },
        attributes: ["username"],
        include: [
          {
            model: Pedido,
            where: { order_id: orderID },
            include: [{ model: Plato, attributes: ["mealName", "price"] }],
            attributes: { exclude: ["updatedAt"] },
          },
        ],
      });
      if (user == null) {
        return res.status(404).send("Orden no encontrada");
      }
      return res.status(200).json(user);
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
