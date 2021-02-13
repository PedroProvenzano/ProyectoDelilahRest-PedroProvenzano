require("dotenv/config");
const jwt = require("jsonwebtoken");

async function tokenRefresher(username) {
  return await jwt.sign(username, process.env.ACCESS_TOKEN_REFRESH, {
    expiresIn: "4h",
  });
}

module.exports = tokenRefresher;
