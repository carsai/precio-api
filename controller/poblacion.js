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
    let mensaje = error;
    let status = 400;

    if (error.name === 'SequelizeForeignKeyConstraintError') {
      mensaje = 'La provincia indicada no existe';
    } else {
      status = 500;
    }

    return res.status(status).json({
      ok: false,
      error: mensaje,
    });
  }
};

/** @type {import("express").RequestHandler} */
const modificarPoblacion = async (req, res) => {
  const { id, ...poblacion } = req.body;

  try {
    const cantidad = await Poblaciones.update(poblacion, { where: { id } });
    return res.json({
      ok: true,
      cantidad,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
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

  const poblacion = await Poblaciones.findOne({ where: { id } });
  return res.json({
    ok: true,
    poblacion,
  });
};

/** @type {import("express").RequestHandler} */
const getPoblacionByProvincia = async (req, res) => {
  const { id } = req.params;

  const poblaciones = await Poblaciones.findAll({ where: { provinciaId: id } });
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
  getPoblacionByProvincia,
};
