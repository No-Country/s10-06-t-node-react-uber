const mongoose = require('mongoose');

const viajeSchema = new mongoose.Schema({
  origen: String,
  destino: String,
  fecha: Date,
  id_conductor: { type: mongoose.Schema.Types.ObjectId, ref: 'Conductor' },
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Viaje = mongoose.model('Viaje', viajeSchema);

module.exports = Viaje;
