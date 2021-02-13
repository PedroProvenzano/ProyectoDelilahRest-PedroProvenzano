const Pedido = require("./models/Pedido");
const Usuario = require("./models/Usuario");
const Plato = require("./models/Plato");
const Token = require("./models/Token");
const UsuarioPedido = require("./models/Usuario-Pedido");

(async () => {
  await Usuario.sync();
  await Pedido.sync();
  await Plato.sync();
  await Token.sync();
  await UsuarioPedido.sync();
})();
