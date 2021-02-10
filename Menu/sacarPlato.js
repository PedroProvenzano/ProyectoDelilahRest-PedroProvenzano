const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hola desde Borrar plato");
});

router.delete("/", async (req, res) => {});

module.exports = router;
