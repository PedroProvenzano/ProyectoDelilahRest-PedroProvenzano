const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connection");

class PedidoPlato extends Model {}

PedidoPlato.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
    },
    meal_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "PedidoPlato",
    tableName: "PedidoPlatos",
  }
);

module.exports = PedidoPlato;
