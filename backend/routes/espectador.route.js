const express = require('express');
const router = express.Router();
const espectadorCtrl = require('../controllers/espectador.controller');

router.post('/', espectadorCtrl.crearEspectador);
router.get('/espectador', espectadorCtrl.obtenerEspectadores);
router.get('/espectador/:id', espectadorCtrl.obtenerEspectadorPorId);

module.exports = router;