const fs = require('fs');
const { Marcas } = require('../db/config');

/** @type {import("express").RequestHandler} */
const altaMarca = async (req, res) => {
  let marca = req.body;

  if (req.file) {
    marca = {
      ...marca,
      imagen: `${req.file.destination.match(/\/.+$/)[0]}/${req.file.filename}`,
    };
  }

  const resultado = await Marcas.create(marca);

  return res.json({
    ok: true,
    marca: resultado,
  });
};

/** @type {import("express").RequestHandler} */
const modificarMarca = async (req, res) => {
  const { id, ...resto } = req.body;

  let marca = resto;

  if (req.file) {
    const imagenFinal = `${req.file.destination.match(/\/.+$/)[0]}/${req.file.filename}`;
    const imagen = await (await Marcas.findOne({ where: { id } })).getDataValue('imagen');
    if (imagen !== imagenFinal) fs.unlinkSync(`public${imagen}`);
    marca = {
      ...marca,
      imagen: imagenFinal,
    };
  }

  const cantidad = await Marcas.update(marca, { where: { id } });

  return res.json({
    ok: true,
    cantidad,
  });
};

/** @type {import("express").RequestHandler} */
const eliminarMarca = async (req, res) => {
  const { id } = req.params;

  const imagen = await (await Marcas.findOne({ where: { id } })).getDataValue('imagen');

  if (imagen !== '/imagenes/sin-imagen.png') fs.unlinkSync(`public${imagen}`);

  const cantidad = await Marcas.destroy({
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
const getAllMarcas = async (_req, res) => {
  const marcas = await Marcas.findAll();
  return res.json({
    ok: true,
    marcas,
  });
};

/** @type {import("express").RequestHandler} */
const getMarca = async (req, res) => {
  const { id } = req.params;

  const marcas = await Marcas.findOne({ where: { id } });
  return res.json({
    ok: true,
    marcas,
  });
};

module.exports = {
  altaMarca,
  modificarMarca,
  eliminarMarca,
  getAllMarcas,
  getMarca,
};
