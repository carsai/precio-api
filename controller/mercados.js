const fs = require('fs');
const { Mercados } = require('../db/config');

/** @type {import("express").RequestHandler} */
const altaMercado = async (req, res) => {
  let mercado = req.body;

  if (req.file) {
    mercado = {
      ...mercado,
      imagen: `${req.file.destination.match(/\/.+$/)[0]}/${req.file.filename}`,
    };
  }

  const resultado = await Mercados.create(mercado);

  return res.json({
    ok: true,
    mercado: resultado,
  });
};

/** @type {import("express").RequestHandler} */
const modificarMercado = async (req, res) => {
  const { id, ...resto } = req.body;

  let mercado = resto;

  if (req.file) {
    const imagenFinal = `${req.file.destination.match(/\/.+$/)[0]}/${req.file.filename}`;
    const imagen = await (await Mercados.findOne({ where: { id } })).getDataValue('imagen');
    if (imagen !== imagenFinal) fs.unlinkSync(`public${imagen}`);
    mercado = {
      ...mercado,
      imagen: imagenFinal,
    };
  }

  const cantidad = await Mercados.update(mercado, { where: { id } });

  return res.json({
    ok: true,
    cantidad,
  });
};

/** @type {import("express").RequestHandler} */
const eliminarMercado = async (req, res) => {
  const { id } = req.params;

  const imagen = await (await Mercados.findOne({ where: { id } })).getDataValue('imagen');

  if (imagen !== '/imagenes/sin-imagen.png') fs.unlinkSync(`public${imagen}`);

  await Mercados.destroy({
    where: {
      id,
    },
  });

  return res.json({
    ok: true,
  });
};

/** @type {import("express").RequestHandler} */
const getAllMercado = async (_req, res) => {
  const mercados = await Mercados.findAll();
  return res.json({
    ok: true,
    mercados,
  });
};

/** @type {import("express").RequestHandler} */
const getMercado = async (req, res) => {
  const { id } = req.params;

  const mercado = await Mercados.findOne({ where: { id } });
  return res.json({
    ok: true,
    mercado,
  });
};

module.exports = {
  altaMercado,
  modificarMercado,
  eliminarMercado,
  getAllMercado,
  getMercado,
};
