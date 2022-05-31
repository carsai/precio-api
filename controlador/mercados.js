/** @type {import("express").RequestHandler} */
const altaMercado = (req, res) => {
  res.json({
    ok: true,
    accion: 'A',
  });
};

/** @type {import("express").RequestHandler} */
const modificarMercado = (req, res) => {
  res.json({
    ok: true,
    accion: 'M',
  });
};

/** @type {import("express").RequestHandler} */
const eliminarMercado = (req, res) => {
  res.json({
    ok: true,
    accion: 'E',
  });
};

/** @type {import("express").RequestHandler} */
const getAllMercado = (req, res) => {
  res.json({
    ok: true,
    accion: 'T',
  });
};

module.exports = {
  altaMercado,
  modificarMercado,
  eliminarMercado,
  getAllMercado,
};
