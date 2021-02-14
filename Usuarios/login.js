const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");
const Token = require("../models/Token");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenRefresher = require("../Middlewares/tokenRefresher");

router.get("/", async (req, res) => {
  try {
    const user = await Usuario.findOne({
      where: { username: req.body.username },
    });
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    if (await bcrypt.compare(req.body.password, user.dataValues.password)) {
      let userForToken = {
        username: req.body.username,
      };
      const accessRefreshToken = await tokenRefresher(userForToken);
      const accessToken = jwt.sign(userForToken, process.env.ACCESS_TOKEN);
      const userToken = await Token.create({
        token: accessToken,
      });
      user.addToken(userToken);
      let message = {
        msg: `Login exitoso`,
        username: user.username,
        sendDir: user.sendDir,
        phone: user.phone,
        fullname: user.fullname,
        email: user.email,
        refreshToken: accessRefreshToken,
        Token: accessToken,
      };
      res.status(200).json(message);
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

module.exports = router;
