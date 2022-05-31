/** @type {import("express").RequestHandler} */
const validarMercado = (req, res, next) => {
  const { nombre } = req.body;

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
