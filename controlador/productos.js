/** @type {import("express").RequestHandler} */
const altaProducto = (req, res) => {
  res.json({
    ok: true,
    accion: 'A',
  });
};

/** @type {import("express").RequestHandler} */
const modificarProducto = (req, res) => {
  res.json({
    ok: true,
    accion: 'M',
  });
};

/** @type {import("express").RequestHandler} */
const eliminarProducto = (req, res) => {
  res.json({
    ok: true,
    accion: 'E',
  });
};

/** @type {import("express").RequestHandler} */
const getAllProducto = (req, res) => {
  res.json({
    ok: true,
    accion: 'T',
  });
};

module.exports = {
  altaProducto,
  modificarProducto,
  eliminarProducto,
  getAllProducto,
};
