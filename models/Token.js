const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connection");

class Token extends Model {}

Token.init(
  {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Token",
    tableName: "Tokens",
  }
);

module.exports = Token;
