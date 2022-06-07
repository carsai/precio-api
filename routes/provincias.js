const { Router } = require('express');
const {
  altaProvincia, modificarProvincia, eliminarProvincia, getAllProvincias, getProvincia,
} = require('../controller/provincias');

const router = Router();

router.get('/', getAllProvincias);

router.get('/:id', getProvincia);

router.post('/', altaProvincia);

router.put('/', modificarProvincia);

router.delete('/:id', eliminarProvincia);

module.exports = router;
