const express = require("express");
const router = express.Router();

const checkUserToken = require("../Middlewares/checkUserToken");
const checkAdmin = require("../Middlewares/checkAdmin");

// Rutas
// Get
const MenuCompleto = require("../Menu/menuCompleto");
router.use("/", MenuCompleto);
// Post
const AgregarPlato = require("../Menu/agregarPlato");
router.use("/add", checkUserToken, checkAdmin, AgregarPlato);
// Delete
const EliminarPlato = require("../Menu/sacarPlato");
router.use("/delete", checkUserToken, checkAdmin, EliminarPlato);
// Put
const EditarPlato = require("../Menu/editarPlato");
router.use("/edit", checkUserToken, checkAdmin, EditarPlato);

module.exports = router;
