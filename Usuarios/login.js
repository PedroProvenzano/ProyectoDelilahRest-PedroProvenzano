const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hola desde login usuario");
});

module.exports = router;
