const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connection");

class PedidoPlato extends Model {}

PedidoPlato.init(
  {},
  {
    sequelize,
    modelName: "PedidoPlato",
    tableName: "PedidoPlatos",
  }
);

module.exports = PedidoPlato;
