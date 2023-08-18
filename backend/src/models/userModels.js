import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    }, 

    lastName: {
        type: String, 
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String, 
        required: true
    },    

    dni: {
        type: Number, 
        unique: true,
    },                                                     // confirmar ya que no aparece ni en app ni en web

    cellNumber: {
        type: Number, 
        unique: true,
    },
    
    dateOfBirth: Date,                                      // confirmar ya que en web pide que tenga mas de 18 años     
    
    VerificationCode: {
         type: String
    },
    
    emailstatus: { 
        type: String,
        default: "UNVERIFIED" 
    },                                                      // para devolver al verificar el code
            
}, /* {
    timestamps:true
} */)

export default model("User", userSchema);

