const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connection");

class Plato extends Model {}

Plato.init(
  {
    meal_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    mealName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Plato",
    tableName: "Platos",
  }
);

module.exports = Plato;
