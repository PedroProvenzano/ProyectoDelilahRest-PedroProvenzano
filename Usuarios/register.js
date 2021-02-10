const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

router.get("/", async (req, res) => {
  res.send("hola desde register usuario");
});

router.post("/", async (req, res) => {
  console.log(req.body);
  let usuario = await Usuario.create({
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    celphone: req.body.celphone,
    sendDir: req.body.sendDir,
    password: req.body.password,
  });
  res.json(usuario);
});

module.exports = router;
