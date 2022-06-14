const { Router } = require('express');
const {
  altaPoblacion,
  modificarPoblacion,
  eliminarPoblacion,
  getAllPoblacion,
  getPoblacion,
  getPoblacionByProvincia,
} = require('../controller/poblacion');
const { validarPoblacion } = require('../validator/validaciones');

const router = Router();

router.get('/', getAllPoblacion);

router.get('/:id', getPoblacion);

router.get('/provincia/:id', getPoblacionByProvincia);

router.post('/', validarPoblacion, altaPoblacion);

router.put('/', modificarPoblacion);

router.delete('/:id', eliminarPoblacion);

module.exports = router;
