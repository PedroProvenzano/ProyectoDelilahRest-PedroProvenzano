const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

router.get("/", async (req, res) => {
  const users = await Usuario.findAll({
    attributes: ["username", "fullname", "email", "sendDir", "phone"],
  });
  return res.status(200).json(users);
});

module.exports = router;
