const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hola desde editar plato");
});
// Cambiar a patch
router.put("/", async (req, res) => {});

module.exports = router;
