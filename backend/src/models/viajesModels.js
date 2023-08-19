const mongoose = require('mongoose');

const viajeSchema = new mongoose.Schema({
  origen: {
    type: String,
    required: true,
  },
  destino: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  id_conductor: { type: mongoose.Schema.Types.ObjectId, ref: 'Conductor' },
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Viaje = mongoose.model('Viaje', viajeSchema);

module.exports = Viaje;
