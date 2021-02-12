const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
const Token = require("../models/Token");
const getNewToken = require("./getNewToken");
async function checkUserToken(req, res, next) {
  // Check si el token es correcto
  try {
    // Check Parametros
    if (!req.body.refreshToken) {
      res.status(400).send("Need a Refresh Token (refreshToken)");
      return;
    }
    if (!req.body.token) {
      res.status(400).send("Need a Token (token)");
      return;
    }
    if (!req.body.username) {
      res.status(400).send("Need a username (username)");
      return;
    }
    // Comparar tokens
    jwt.verify(
      req.body.refreshToken,
      process.env.ACCESS_TOKEN_REFRESH,
      (err, user) => {
        if (err) {
          return res
            .status(401)
            .send(
              "Token expirado, pedir nueva token en endpoint /tokenrefresh"
            );
        } else {
          next();
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

module.exports = checkUserToken;
