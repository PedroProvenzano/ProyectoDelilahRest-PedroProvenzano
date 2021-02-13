const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

// Crear Usuario

router.post("/", async (req, res) => {
  try {
    if (process.env.ADMIN_PASS == req.body.password) {
      let arrayUsuarios = req.body.arrayUsuarios;
      let nuevoArray = [];
      for (let i of arrayUsuarios) {
        const hashedPassword = await bcrypt.hash(i.password, 10);

        let newUser = {
          username: i.username,
          fullname: i.fullname,
          email: i.email,
          phone: i.phone,
          sendDir: i.sendDir,
          password: hashedPassword,
        };
        nuevoArray.push(newUser);
      }
      await Usuario.bulkCreate(nuevoArray)
        .then(() => {
          return res.status(200).send("Usuarios insertados correctamente");
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
