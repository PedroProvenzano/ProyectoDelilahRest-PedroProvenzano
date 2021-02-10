const express = require("express");
const router = express.Router();

// Rutas
// Post
const UsuariosRegister = require("../Usuarios/register");
router.use("/add", UsuariosRegister);
// Delete
const UsuariosBorrar = require("../Usuarios/borrar");
router.use("/delete", UsuariosBorrar);
// Get
//    Lista
const UsuariosLista = require("../Usuarios/lista");
router.use("/", UsuariosLista);
//    Login
const UsuariosLogin = require("../Usuarios/login");
router.use("/login", UsuariosLogin);
// Put
const UsuariosEdit = require("../Usuarios/edit");
router.use("/edit", UsuariosEdit);

module.exports = router;
