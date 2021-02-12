const Usuario = require("../models/Usuario");

async function checkAdmin(req, res, next) {
  // Check si es admin
  if (!req.body.username) {
    res.status(400).send(`You need to provide an username`);
    return;
  }
  const user = await Usuario.findOne({
    where: { username: req.body.username },
  });
  if (user == null) return res.status(404);
  if (user.dataValues.isAdmin) {
    next();
  } else {
    res.status(403).send(`You need to be admin`);
    return;
  }
}

module.exports = checkAdmin;
