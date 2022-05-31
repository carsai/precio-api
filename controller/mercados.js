const { Mercados } = require('../db/config');

/** @type {import("express").RequestHandler} */
const altaMercado = async (req, res) => {
  const { nombre } = req.body;

  const mercado = await Mercados.create({ nombre });

  return res.json({
    ok: true,
    mercado,
  });
};

/** @type {import("express").RequestHandler} */
const modificarMercado = async (req, res) => {
  const { id, nombre } = req.body;

  const cantidad = await Mercados.update({ nombre }, { where: { id } });

  return res.json({
    ok: true,
    cantidad,
  });
};

/** @type {import("express").RequestHandler} */
const eliminarMercado = async (req, res) => {
  const { id } = req.params;

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
