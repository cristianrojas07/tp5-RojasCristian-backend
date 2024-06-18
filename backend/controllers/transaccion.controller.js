const Transaccion = require('../models/transaccion');
const transaccionCtrl = {};

transaccionCtrl.crearTransaccion = async (req, res) => {
  try {
    const transaccion = new Transaccion(req.body);
    await transaccion.save();
    res.json({'status': '1', 'msg': 'Transaccion guardado.'})
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion.'})
  }
};

transaccionCtrl.obtenerTransacciones = async (req, res) => {
  try {
    const transacciones = await Transaccion.find();
    res.json(transacciones);
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion.'})
  }
};

transaccionCtrl.obtenerTransaccionesPorCliente = async (req, res) => {
  try {
    const transacciones = await Transaccion.find({ emailCliente: req.params.email });
    res.json(transacciones);
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion.'})
  }
};

transaccionCtrl.obtenerTransaccionesPorDivisa = async (req, res) => {
  try {
    const transaccion = await Transaccion.find({
      monedaOrigen: req.params.origen,
      monedaDestino: req.params.destino
    });
    res.json(transaccion);
  } catch (error) {
    res.status(400).json({'status': '0', 'msg': 'Error procesando la operacion.'})
  }
};

module.exports = transaccionCtrl;