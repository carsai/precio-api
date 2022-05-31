const { Router } = require('express');
const {
  altaMercado, modificarMercado, eliminarMercado, getAllMercado, getMercado,
} = require('../controlador/mercados');
const { validarMercado } = require('../validar/validaciones');

const router = Router();

router.get('/', getAllMercado);

router.get('/:id', getMercado);

router.post('/', validarMercado, altaMercado);

router.put('/', modificarMercado);

router.delete('/:id', eliminarMercado);

module.exports = router;
