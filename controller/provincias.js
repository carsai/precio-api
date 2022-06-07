const { Provincias } = require('../db/config');

/** @type {import("express").RequestHandler} */
const altaProvincia = async (req, res) => {
  const provincia = req.body;

  const resultado = await Provincias.create(provincia);

  return res.json({
    ok: true,
    provincia: resultado,
  });
};

/** @type {import("express").RequestHandler} */
const modificarProvincia = async (req, res) => {
  const { id, ...resto } = req.body;

  const provincia = resto;

  const cantidad = await Provincias.update(provincia, { where: { id } });

  return res.json({
    ok: true,
    cantidad,
  });
};

/** @type {import("express").RequestHandler} */
const eliminarProvincia = async (req, res) => {
  const { id } = req.params;

  const cantidad = await Provincias.destroy({
    where: {
      id,
    },
  });

  return res.json({
    ok: true,
    cantidad,
  });
};

/** @type {import("express").RequestHandler} */
const getAllProvincias = async (_req, res) => {
  const provincias = await Provincias.findAll();
  return res.json({
    ok: true,
    provincias,
  });
};

/** @type {import("express").RequestHandler} */
const getProvincia = async (req, res) => {
  const { id } = req.params;

  const provincias = await Provincias.findOne({ where: { id } });
  return res.json({
    ok: true,
    provincias,
  });
};

module.exports = {
  altaProvincia,
  modificarProvincia,
  eliminarProvincia,
  getAllProvincias,
  getProvincia,
};
