import mongoose from "mongoose"


const conductorSchema = new mongoose.Schema({
  
  nombre: {
    type: String, 
    required: true
},
  apellido: {
    type: String, 
    required: true
}, 
  correoelectronico: {
    type: String, 
    required: true
}, 
  telefono: {
    type: String, 
    required: true
}, 
  puntuacion: {
    type: String, 
    
}, 
  estado: {
    type: String, 
    required: true
}, 
pagos: {
  type: Number, 
  required: true
}, 
});

const Conductor = mongoose.model('Conductor', conductorSchema);

export default Conductor;
