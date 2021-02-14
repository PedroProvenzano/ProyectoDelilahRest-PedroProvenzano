const express = require("express");
const router = express.Router();
const Token = require("../models/Token");

router.get("/", async (req, res) => {
  try {
    const headerBearer = req.headers["authorization"];
    const tokenB = headerBearer && headerBearer.split(" ")[1];
    console.log(tokenB);
    if (tokenB == null) return res.sendStatus(400);
    const tokenDB = await Token.findOne({ where: { token: tokenB } });
    if (tokenDB) {
      tokenDB.destroy();
      return res.status(200).send("Logout Exitoso");
    } else {
      console.log(tokenDB);
      return res.status(404).send("Error");
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

module.exports = router;
