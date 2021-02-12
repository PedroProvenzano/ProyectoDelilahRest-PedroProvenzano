const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

router.delete("/", async (req, res) => {
  if (!req.body.DeleteUsername) {
    return res.status(400).send("Falta usuario (DeleteUsername)");
  }
  const user = await Usuario.findOne({
    where: { username: req.body.DeleteUsername },
  });
  user.destroy();

  return res.status(201).send(`Usuario ${req.body.DeleteUsername} eliminado`);
});

router.delete("/", async (req, res) => {});

module.exports = router;
