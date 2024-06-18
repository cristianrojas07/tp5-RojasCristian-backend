const express = require('express');
const router = express.Router();
const transaccionCtrl = require('../controllers/transaccion.controller');

router.post('/', transaccionCtrl.crearTransaccion);
router.get('/', transaccionCtrl.obtenerTransacciones);
router.get('/cliente/:email', transaccionCtrl.obtenerTransaccionesPorCliente);
router.get('/:origen/:destino', transaccionCtrl.obtenerTransaccionesPorDivisa);

module.exports = router;