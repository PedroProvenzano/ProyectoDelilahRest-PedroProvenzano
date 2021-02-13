const express = require("express");
const router = express.Router();

// Middlewares
const checkAdmin = require("../Middlewares/checkAdmin");
const checkUserToken = require("../Middlewares/checkUserToken");
// Rutas
// Get
//    Estado de pedido
const EstadoPedido = require("../Pedidos/estadoPedido");
router.use("/state", checkUserToken, EstadoPedido);
//    Pedidos del usuario
const PedidosDelUsuario = require("../Pedidos/pedidosdelUsuario");
router.use("/user", checkUserToken, PedidosDelUsuario);
//    Pedidos del usuario admin Acepta ?user_id
const PedidosUsuarioAdmin = require("../Pedidos/pedidosTodos");
router.use("/admin", checkUserToken, checkAdmin, PedidosUsuarioAdmin);
// Delete
const EliminarPedido = require("../Pedidos/eliminarPedido");
router.use("/delete", checkUserToken, checkAdmin, EliminarPedido);
// Put
const EditarPedido = require("../Pedidos/editarPedido");
router.use("/edit", checkUserToken, checkAdmin, EditarPedido);
// Post
const CrearPedido = require("../Pedidos/crearPedido");
router.use("/add", checkUserToken, CrearPedido);

module.exports = router;
