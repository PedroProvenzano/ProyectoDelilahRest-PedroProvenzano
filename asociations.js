const Usuario = require("./models/Usuario");
const Token = require("./models/Token");
const Pedido = require("./models/Pedido");
const Plato = require("./models/Plato");
const PedidoPlato = require("./models/Pedido-Plato");
// const UsuarioPedido = require("./models/Usuario-Pedido");
// Many to Many

// Pedido y Plato
// Pedido.hasMany(Plato);
Plato.belongsToMany(Pedido, { through: PedidoPlato });
Pedido.belongsToMany(Plato, { through: PedidoPlato });
// Usuario y Token
Usuario.hasMany(Token);
// user.addToken()

// Usuario y Pedido
Usuario.hasMany(Pedido, { foreignKey: "usuarioID" });
Pedido.belongsTo(Usuario, { foreignKey: "usuarioID" });
// Pedido.hasOne(Usuario);
// Usuario.belongsToMany(Pedido, { through: UsuarioPedido });
// Pedido.belongsToMany(Usuario, { through: UsuarioPedido });
