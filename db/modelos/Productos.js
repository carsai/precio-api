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
  mercadoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'sin-imagen-producto.png',
  },
};
