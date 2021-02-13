const Usuario = require("./models/Usuario");
const Token = require("./models/Token");
const Pedido = require("./models/Pedido");
const Plato = require("./models/Plato");
const UsuarioPedido = require("./models/Usuario-Pedido");
// Many to Many

// Pedido y Plato
Pedido.hasMany(Plato);

// Usuario y Token
Usuario.hasMany(Token);
// user.addToken()

// Usuario y Pedido
//Usuario.hasMany(Pedido);

Usuario.belongsToMany(Pedido, { through: UsuarioPedido });
Pedido.belongsToMany(Usuario, { through: UsuarioPedido });
