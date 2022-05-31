const { Router } = require('express');
const {
  altaMercado, modificarMercado, eliminarMercado, getAllMercado,
} = require('../controlador/mercados');

const router = Router();

router.get('/', getAllMercado);

router.post('/', altaMercado);

router.put('/', modificarMercado);

router.delete('/', eliminarMercado);

module.exports = router;
