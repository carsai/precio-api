const { Router } = require('express');
const {
  altaPoblacion, modificarPoblacion, eliminarPoblacion, getAllPoblacion, getPoblacion,
} = require('../controller/poblacion');

const router = Router();

router.get('/', getAllPoblacion);

router.get('/:id', getPoblacion);

router.post('/', altaPoblacion);

router.put('/', modificarPoblacion);

router.delete('/:id', eliminarPoblacion);

module.exports = router;
