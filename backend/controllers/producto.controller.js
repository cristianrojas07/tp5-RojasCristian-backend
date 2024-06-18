const Producto = require('../models/producto');
const productoCtrl = {};

productoCtrl.crearProducto = async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.json({'status': '1', 'msg': 'Producto guardado.'})
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion.'})
  }
};

productoCtrl.obtenerProductos = async (req, res) => {
  try {
    const producto = await Producto.find();
    res.json(producto);
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion.'})
  }
};

productoCtrl.eliminarProducto = async (req, res) => {
  try {
    await Producto.deleteOne({_id: req.params.id});
    res.json({'status': '1', 'msg': 'Producto removed.'})
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion'}) 
  }
};

productoCtrl.modificarProducto = async (req, res) => {
  try {
    const vproducto = new Producto(req.body);
    await Producto.updateOne({_id: req.body._id}, vproducto);
    res.json({'status': '1', 'msg': 'Producto updated.'})
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion'}) 
  }
};

productoCtrl.obtenerProductosDestacados = async (req, res) => {
  try {
    const products = await Producto.find({ destacado: true });
    res.json(products);
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion'}) 
  }
};

module.exports = productoCtrl;