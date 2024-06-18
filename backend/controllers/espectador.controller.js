const Espectador = require('../models/espectador');
const espectadorCtrl = {};

espectadorCtrl.crearEspectador = async (req, res) => {
  try {
    const espectador = new Espectador(req.body);
    await espectador.save();
    res.json({ 'status': '1', 'msg': 'Espectador guardado.' })
  } catch (error) {
    res.status(400).json({ 'status': '0', 'msg': 'Error procesando la operacion' })
  }
};

espectadorCtrl.obtenerEspectadores = async (req, res) => {
  try {
    const espectadores = await Espectador.find();
    res.json(espectadores);
  } catch (error) {
    res.status(400).json({ 'status': '0', 'msg': 'Error procesando la operacion' })
  }
};

espectadorCtrl.obtenerEspectadorPorId = async (req, res) => {
  try {
    const espectador = await Espectador.findById(req.params.id);
    res.json(espectador);
  } catch (error) {
    res.status(400).json({ 'status': '0', 'msg': 'Error procesando la operacion' })
  }
};

module.exports = espectadorCtrl;