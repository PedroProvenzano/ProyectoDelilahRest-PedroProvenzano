const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");
const Token = require("../models/Token");
const tokenRefresher = require("../Middlewares/tokenRefresher");
const jwt = require("jsonwebtoken");
// Rutas
// Post
router.get("/", async (req, res) => {
  const user = await Usuario.findOne({
    where: { username: req.body.username },
    include: [Token],
  });
  let coincide = false;
  for (let i = 0; i < user.dataValues.Tokens.length; i++) {
    if (req.body.token == user.dataValues.Tokens[i].dataValues.token) {
      coincide = true;
    }
  }
  if (coincide) {
    jwt.verify(req.body.token, process.env.ACCESS_TOKEN, async (err, user) => {
      if (err) {
        return res.status(403).send("Token no valido");
      }
      let userForToken = {
        username: req.body.username,
      };
      let refreshedToken = await tokenRefresher(userForToken);
      return res
        .status(200)
        .json({ refreshedToken: refreshedToken, username: req.body.username });
    });
  } else {
    return res.status(401).send("Token expirado, vuelva a logearse");
  }
});

module.exports = router;
