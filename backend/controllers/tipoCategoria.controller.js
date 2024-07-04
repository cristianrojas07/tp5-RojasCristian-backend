const TipoCategoria = require('../models/tipoCategoria');
const tipoCategoriaCtrl = {};

tipoCategoriaCtrl.crearTipoCategoria = async (req, res) => {
  try {
    const tipoCategoria = new TipoCategoria(req.body);
    await tipoCategoria.save();
    res.json({ 'status': '1', 'msg': 'Categoria guardado.' })
  } catch (error) {
    res.status(400).json({ 'status': '0', 'msg': 'Error procesando la operacion' })
  }
};

module.exports = tipoCategoriaCtrl;