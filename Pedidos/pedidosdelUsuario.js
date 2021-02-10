const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hola desde pedidos del usuario");
});

module.exports = router;
