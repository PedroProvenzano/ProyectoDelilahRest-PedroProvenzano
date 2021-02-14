const express = require("express");
const router = express.Router();
const Plato = require("../models/Plato");
const bcrypt = require("bcrypt");

// Crear Plato

router.post("/", async (req, res) => {
  try {
    if (process.env.ADMIN_PASS == req.body.password) {
      let arrayPlatos = req.body.arrayPlatos;
      let nuevoArray = [];
      for (let i of arrayPlatos) {
        let newPlato = {
          mealName: i.mealName,
          price: i.price,
        };
        nuevoArray.push(newPlato);
      }
      await Plato.bulkCreate(nuevoArray)
        .then(() => {
          return res.status(200).send("Platos insertados correctamente");
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).json(err);
        });
    } else {
      return res.status(401).send("Pass incorrecta");
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
