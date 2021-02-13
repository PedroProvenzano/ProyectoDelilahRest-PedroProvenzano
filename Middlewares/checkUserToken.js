const jwt = require("jsonwebtoken");
async function checkUserToken(req, res, next) {
  // Check si el token es correcto
  try {
    const headerBearer = req.headers["authorization"];
    const token = headerBearer && headerBearer.split(" ")[1];
    if (token == null) return res.sendStatus(400);
    // Check Parametros
    if (req.body.username == null) {
      return res.status(400).send("Need a username (username)");
    }
    // Comparar tokens
    jwt.verify(token, process.env.ACCESS_TOKEN_REFRESH, (err, user) => {
      if (err) {
        return res
          .status(401)
          .send("Token expirado, pedir nueva token en endpoint /tokenrefresh");
      } else {
        next();
      }
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

module.exports = checkUserToken;
