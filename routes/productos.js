const { Router } = require('express');
const {
  getAllProducto, altaProducto, modificarProducto, eliminarProducto,
} = require('../controlador/productos');

const router = Router();

router.get('/', getAllProducto);

router.post('/', altaProducto);

router.put('/', modificarProducto);

router.delete('/', eliminarProducto);

module.exports = router;
