const { Poblaciones } = require('../db/config');

/** @type {import("express").RequestHandler} */
const altaPoblacion = async (req, res) => {
  const poblacion = req.body;

  try {
    const resultado = await Poblaciones.create(poblacion);

    return res.json({
      ok: true,
      poblacion: resultado,
    });
  } catch (error) {
    return res.json({
      ok: false,
      error,
    });
  }
};

/** @type {import("express").RequestHandler} */
const modificarPoblacion = async (req, res) => {
  const { id, ...resto } = req.body;

  const poblacion = resto;

  const cantidad = await Poblaciones.update(poblacion, { where: { id } });

  return res.json({
    ok: true,
    cantidad,
  });
};

/** @type {import("express").RequestHandler} */
const eliminarPoblacion = async (req, res) => {
  const { id } = req.params;

  const cantidad = await Poblaciones.destroy({
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
const getAllPoblacion = async (_req, res) => {
  const poblaciones = await Poblaciones.findAll();
  return res.json({
    ok: true,
    poblaciones,
  });
};

/** @type {import("express").RequestHandler} */
const getPoblacion = async (req, res) => {
  const { id } = req.params;

  const poblaciones = await Poblaciones.findOne({ where: { id } });
  return res.json({
    ok: true,
    poblaciones,
  });
};

module.exports = {
  altaPoblacion,
  modificarPoblacion,
  eliminarPoblacion,
  getAllPoblacion,
  getPoblacion,
};
