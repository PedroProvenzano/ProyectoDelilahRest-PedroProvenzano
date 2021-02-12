const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// Cambiar a patch
router.put("/", async (req, res) => {
  const user = await Usuario.findOne({
    where: { username: req.body.username },
  });
  if (
    !req.body.phone &&
    !req.body.email &&
    !req.body.sendDir &&
    !req.body.fullname
  ) {
    return res.status(400).send("Falta agregar informacion para editar");
  }
  if (req.body.phone) {
    user.phone = req.body.phone;
  }
  if (req.body.email) {
    user.email = req.body.email;
  }
  if (req.body.sendDir) {
    user.sendDir = req.body.sendDir;
  }
  if (req.body.fullname) {
    user.fullname = req.body.fullname;
  }
  await user.save({ fields: ["email", "celphone", "sendDir", "fullname"] });
  await user.reload();
  return res.status(201).send("Usuario actualizado");
});

module.exports = router;
