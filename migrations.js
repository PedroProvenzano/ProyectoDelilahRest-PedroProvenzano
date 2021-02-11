const Pedido = require("./models/Pedido");
const Usuario = require("./models/Usuario");
const Pedido = require("./models/Pedido");
const Plato = require("./models/Plato");
const Token = require("./models/Token");
const PedidoPlato = require("./models/Pedido-Plato");

(async () => {
  await Usuario.sync();
  await Pedido.sync();
  await Plato.sync();
  await Token.sync();
  await PedidoPlato.sync();
})();
