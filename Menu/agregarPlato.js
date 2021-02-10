const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hola desde agregar plato");
});

router.post("/", async (req, res) => {});

module.exports = router;
