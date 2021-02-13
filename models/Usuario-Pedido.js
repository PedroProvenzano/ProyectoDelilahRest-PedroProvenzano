const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connection");

class UsuarioPedido extends Model {}

UsuarioPedido.init(
  {},
  {
    sequelize,
    modelName: "UsuarioPedido",
    tableName: "UsuarioPedidos",
  }
);

module.exports = UsuarioPedido;
