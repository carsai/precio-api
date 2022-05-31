const { DataTypes } = require('sequelize');

/** @type {import("sequelize").ModelAttributes} */
module.exports = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
};
