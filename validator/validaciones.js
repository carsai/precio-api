/** @type {import("express").RequestHandler} */
const validarMercado = (req, res, next) => {
  const { id, nombre } = req.body;

  if (req.method === 'PUT' && !id) {
    return res.json({
      ok: false,
      motivo: 'Id obligatorio',
    });
  }

  if (!nombre) {
    return res.json({
      ok: false,
      motivo: 'Nombre obligatorio',
    });
  }

  return next();
};

module.exports = {
  validarMercado,
};
