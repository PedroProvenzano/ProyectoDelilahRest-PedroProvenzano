const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");
const Token = require("../models/Token");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenRefresher = require("../Middlewares/tokenRefresher");

router.get("/", async (req, res) => {
  try {
    if (!req.body.token) {
      return res.status(400).send("Falta Token (token)");
    }
    const token = await Token.findOne({ where: { token: req.body.token } });
    if (token) {
      token.destroy();
      return res.status(200).send("Logout Exitoso");
    } else {
      console.log(token);
      return res.send("Error");
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

module.exports = router;
