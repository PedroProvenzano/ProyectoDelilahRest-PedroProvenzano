const express = require("express");
const router = express.Router();
const checkAdmin = require("../Middlewares/checkAdmin");
const checkUserToken = require("../Middlewares/checkUserToken");
// Rutas
// Post
const UsuariosRegister = require("../Usuarios/register");
router.use("/add", UsuariosRegister);
// Delete
const UsuariosBorrar = require("../Usuarios/borrar");
router.use("/delete", checkUserToken, checkAdmin, UsuariosBorrar);
// Put
const UsuariosEdit = require("../Usuarios/edit");
router.use("/edit", checkUserToken, UsuariosEdit);
// Get
//    Login
const UsuariosLogin = require("../Usuarios/login");
router.use("/login", UsuariosLogin);
//    Lista
const UsuariosLista = require("../Usuarios/lista");
router.use("/", checkUserToken, checkAdmin, UsuariosLista);

module.exports = router;
