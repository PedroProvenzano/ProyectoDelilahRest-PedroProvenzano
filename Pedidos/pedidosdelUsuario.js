const express = require("express");
const Pedido = require("../models/Pedido");
const Plato = require("../models/Plato");
const Usuario = require("../models/Usuario");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let user = await Usuario.findOne({
      where: { username: req.body.usernameOrders },
      attributes: {
        exclude: ["user_id", "password", "isAdmin", "updatedAt", "createdAt"],
      },
      include: [
        {
          model: Pedido,
          attributes: { exclude: ["updatedAt"] },
          include: [
            {
              model: Plato,
              attributes: { exclude: ["meal_id", "updatedAt", "createdAt"] },
              through: { attributes: [] },
            },
          ],
        },
      ],
    });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(404).json(err);
  }
});

module.exports = router;
