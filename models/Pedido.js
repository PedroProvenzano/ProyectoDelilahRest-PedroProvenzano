const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connection");

class Pedido extends Model {}

Pedido.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    payMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderState: {
      type: DataTypes.STRING,
      defaultValue: "Nuevo",
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Pedido",
    tableName: "Pedidos",
  }
);

module.exports = Pedido;
