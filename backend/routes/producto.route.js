const express = require('express');
const router = express.Router();
const productoCtrl = require('../controllers/producto.controller');

router.post('/', productoCtrl.crearProducto);
router.get('/', productoCtrl.obtenerProductos);
router.delete('/:id', productoCtrl.eliminarProducto);
router.put('/:id', productoCtrl.modificarProducto);
router.get('/destacados', productoCtrl.obtenerProductosDestacados);

module.exports = router;