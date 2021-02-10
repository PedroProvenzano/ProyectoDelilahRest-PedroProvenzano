const express = require("express");
const router = express.Router();

// Rutas
// Get
const MenuCompleto = require("../Menu/menuCompleto");
router.use("/", MenuCompleto);
// Post
const AgregarPlato = require("../Menu/agregarPlato");
router.use("/add", AgregarPlato);
// Delete
const EliminarPlato = require("../Menu/sacarPlato");
router.use("/delete", EliminarPlato);
// Put
const EditarPlato = require("../Menu/editarPlato");
router.use("/edit", EditarPlato);

module.exports = router;
