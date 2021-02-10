const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hola desde estado del pedido");
});

module.exports = router;
