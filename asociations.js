const Usuario = require("./models/Usuario");
const Token = require("./models/Token");
const Pedido = require("./models/Pedido");
const Plato = require("./models/Plato");

// Many to Many

// Pedido y Plato
Pedido.belongsToMany(Plato, { through: "PedidoPlatos" });
Plato.belongsToMany(Pedido, { through: "PedidoPlatos" });

// Usuario y Token
Usuario.hasOne(Token, { as: "UserToken", constraints: false });

// Usuario y Pedido
Usuario.hasMany(Pedido, { as: "encargos" });
