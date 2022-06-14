/** @type {import("express").RequestHandler} */
const validarMercado = (req, res, next) => {
  const { id, nombre } = req.body;

  if (req.method === 'PUT' && !id) {
    return res.status(400).json({
      ok: false,
      motivo: 'Id obligatorio',
    });
  }

  if (!nombre) {
    return res.status(400).json({
      ok: false,
      motivo: 'Nombre obligatorio',
    });
  }

  return next();
};

/** @type {import("express").RequestHandler} */
const validarProducto = (req, res, next) => {
  const { id, nombre } = req.body;

  if (req.method === 'PUT' && !id) {
    return res.status(400).json({
      ok: false,
      motivo: 'Id obligatorio',
    });
  }

  if (!nombre) {
    return res.status(400).json({
      ok: false,
      motivo: 'Nombre obligatorio',
    });
  }

  return next();
};

/** @type {import("express").RequestHandler} */
const validarPoblacion = (req, res, next) => {
  const { id, nombre, provinciaId } = req.body;

  if (req.method === 'PUT' && !id) {
    return res.status(400).json({
      ok: false,
      motivo: 'Id obligatorio',
    });
  }

  if (!nombre) {
    return res.status(400).json({
      ok: false,
      motivo: 'Nombre obligatorio',
    });
  }

  if (req.method === 'POST' && !provinciaId) {
    return res.status(400).json({
      ok: false,
      motivo: 'ID Provincia obligatorio',
    });
  }

  return next();
};

module.exports = {
  validarMercado,
  validarProducto,
  validarPoblacion,
};
