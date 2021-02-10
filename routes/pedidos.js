const express = require("express");
const router = express.Router();

// Rutas
// Get
//    Estado de pedido
const EstadoPedido = require("../Pedidos/estadoPedido");
router.use("/state", EstadoPedido);
//    Pedidos del usuario
const PedidosDelUsuario = require("../Pedidos/pedidosdelUsuario");
router.use("/user", PedidosDelUsuario);
//    Pedidos del usuario admin Acepta ?user_id
const PedidosUsuarioAdmin = require("../Pedidos/pedidosTodos");
router.use("/admin", PedidosUsuarioAdmin);
// Delete
const EliminarPedido = require("../Pedidos/eliminarPedido");
router.use("/delete", EliminarPedido);
// Put
const EditarPedido = require("../Pedidos/editarPedido");
router.use("/edit", EditarPedido);
// Post
const CrearPedido = require("../Pedidos/crearPedido");
router.use("/add", CrearPedido);

router.get("/", async (req, res) => {
  res.send("Hola desde pedidos");
});

module.exports = router;
