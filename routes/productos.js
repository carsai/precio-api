const { Router } = require('express');
const {
  getAllProducto, altaProducto, modificarProducto, eliminarProducto, getProducto,
} = require('../controller/productos');
const subirImagen = require('../validator/upload');
const { validarProducto } = require('../validator/validaciones');

const router = Router();

router.get('/', getAllProducto);

router.get('/:id', getProducto);

router.post('/', subirImagen('producto'), altaProducto);

router.put('/', subirImagen('producto'), validarProducto, modificarProducto);

router.delete('/:id', eliminarProducto);

module.exports = router;
