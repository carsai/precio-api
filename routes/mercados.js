const { Router } = require('express');
const {
  altaMercado, modificarMercado, eliminarMercado, getAllMercado, getMercado,
} = require('../controller/mercados');
const subirImagen = require('../validator/upload');
const { validarMercado } = require('../validator/validaciones');

const router = Router();

router.get('/', getAllMercado);

router.get('/:id', getMercado);

router.post('/', subirImagen('mercado'), altaMercado);

router.put('/', subirImagen('mercado'), validarMercado, modificarMercado);

router.delete('/:id', eliminarMercado);

module.exports = router;
