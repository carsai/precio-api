const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.SQLITE, { logging: false });

const Mercados = sequelize.define('Mercados', require('./models/Mercados'), { timestamps: false });
const Productos = sequelize.define('Productos', require('./models/Productos'), { timestamps: false });
const MercadosProductos = sequelize.define('MercadosProductos', require('./models/MercadoProducto'), { timestamps: false });

Mercados.hasMany(MercadosProductos);
Productos.hasMany(MercadosProductos);

const conectarDB = async () => {
  await sequelize.sync();
};

module.exports = {
  conectarDB,
  Mercados,
  Productos,
  MercadosProductos,
};
