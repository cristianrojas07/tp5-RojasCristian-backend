const mongoose = require('mongoose');
const {Schema} = mongoose;

const TipoCategoriaSchema = new Schema({
  nombre: {type: String, required: true},
  descripcion: {type: String, required: true}
});

module.exports = mongoose.models.TipoCategoria || mongoose.model('TipoCategoria', TipoCategoriaSchema);