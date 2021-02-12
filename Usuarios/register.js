const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

// Crear Usuario

router.post("/", async (req, res) => {
  try {
    let user = await Usuario.findOne({
      where: { username: req.body.username },
    });
    if (user) {
      res.status(409).send("User already exists");
      return;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    Usuario.create({
      username: req.body.username,
      fullname: req.body.fullname,
      email: req.body.email,
      phone: req.body.phone,
      sendDir: req.body.sendDir,
      password: hashedPassword,
    }).then(() => {
      let usuario = {
        username: req.body.username,
        fullname: req.body.fullname,
      };
      res.status(201).json(usuario);
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
