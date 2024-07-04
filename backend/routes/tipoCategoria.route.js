const express = require('express');
const router = express.Router();
const tipoCategoriaCtrl = require('../controllers/tipoCategoria.controller');

router.post('/', tipoCategoriaCtrl.crearTipoCategoria);

module.exports = router;