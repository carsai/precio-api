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
  direccion: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '/imagenes/sin-imagen.png',
  },
};
