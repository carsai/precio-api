const { DataTypes } = require('sequelize');

/** @type {import("sequelize").ModelAttributes} */
module.exports = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
