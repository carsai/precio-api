const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.SQLITE, { logging: process.env.SQLITE_LOG === 'true' });

const Mercados = sequelize.define('Mercados', require('./models/Mercados'), { timestamps: false });
const Productos = sequelize.define('Productos', require('./models/Productos'), { timestamps: false });
const MercadosProductos = sequelize.define('MercadosProductos', require('./models/MercadoProducto'), { timestamps: false });
const Marcas = sequelize.define('Marca', require('./models/Marcas'), { timestamps: false });
const Provincias = sequelize.define('Provincias', require('./models/Provincias'), { timestamps: false });
const Poblaciones = sequelize.define('Poblaciones', require('./models/Poblaciones'), { timestamps: false });

Mercados.hasMany(MercadosProductos, { foreignKey: { allowNull: false } });
Productos.hasMany(MercadosProductos, { foreignKey: { allowNull: false } });

Marcas.hasMany(Productos, { foreignKey: { allowNull: false } });

Provincias.hasMany(Poblaciones, { foreignKey: { allowNull: false } });

Poblaciones.hasMany(Mercados, { foreignKey: { allowNull: false } });

const conectarDB = async () => {
  await sequelize.sync();
};

module.exports = {
  conectarDB,
  Mercados,
  Productos,
  MercadosProductos,
  Marcas,
  Provincias,
  Poblaciones,
};
