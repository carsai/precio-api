const fs = require('fs');
const { Productos } = require('../db/config');

/** @type {import("express").RequestHandler} */
const altaProducto = async (req, res) => {
  let producto = req.body;

  if (req.file) {
    producto = {
      ...producto,
      imagen: `${req.file.destination.match(/\/.+$/)[0]}/${req.file.filename}`,
    };
  }

  const resultado = await Productos.create(producto);

  res.json({
    ok: true,
    producto: resultado,
  });
};

/** @type {import("express").RequestHandler} */
const modificarProducto = async (req, res) => {
  const { id, ...resto } = req.body;

  let producto = resto;

  if (req.file) {
    const imagenFinal = `${req.file.destination.match(/\/.+$/)[0]}/${req.file.filename}`;
    const imagen = await (await Productos.findOne({ where: { id } })).getDataValue('imagen');
    if (imagen !== imagenFinal) fs.unlinkSync(`public${imagen}`);
    producto = {
      ...producto,
      imagen: imagenFinal,
    };
  }

  const cantidad = await Productos.update(producto, { where: { id } });

  res.json({
    ok: true,
    cantidad,
  });
};

/** @type {import("express").RequestHandler} */
const eliminarProducto = async (req, res) => {
  const { id } = req.params;

  const imagen = await (await Productos.findOne({ where: { id } })).getDataValue('imagen');

  if (imagen !== '/imagenes/sin-imagen.png') fs.unlinkSync(`public${imagen}`);

  const cantidad = await Productos.destroy({
    where: {
      id,
    },
  });

  res.json({
    ok: true,
    cantidad,
  });
};

/** @type {import("express").RequestHandler} */
const getAllProducto = async (req, res) => {
  const productos = await Productos.findAll();

  res.json({
    ok: true,
    productos,
  });
};

/** @type {import("express").RequestHandler} */
const getProducto = async (req, res) => {
  const { id } = req.params;

  const producto = await Productos.findOne({ where: { id } });

  res.json({
    ok: true,
    producto,
  });
};

module.exports = {
  altaProducto,
  modificarProducto,
  eliminarProducto,
  getAllProducto,
  getProducto,
};
