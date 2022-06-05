const { Router } = require('express');
const {
  altaMarca, modificarMarca, eliminarMarca, getAllMarcas, getMarca,
} = require('../controller/marcas');
const subirImagen = require('../validator/upload');
const { validarMercado } = require('../validator/validaciones');

const router = Router();

router.get('/', getAllMarcas);

router.get('/:id', getMarca);

router.post('/', subirImagen('marca'), altaMarca);

router.put('/', subirImagen('marca'), validarMercado, modificarMarca);

router.delete('/:id', eliminarMarca);

module.exports = router;
