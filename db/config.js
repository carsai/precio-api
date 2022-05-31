const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.SQLITE);

const Mercados = sequelize.define('Mercados', require('./modelos/Mercados'), { timestamps: false });
const Productos = sequelize.define('Productos', require('./modelos/Productos'), { timestamps: false });

const conectarDB = async () => {
  await sequelize.sync();
};

module.exports = {
  conectarDB,
  Mercados,
  Productos,
};
