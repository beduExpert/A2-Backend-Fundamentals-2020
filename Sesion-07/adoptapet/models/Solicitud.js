const mongoose = require("mongoose");

var SolicitudSchema = new mongoose.Schema({
  mascota: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Mascota' },
  anunciante: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Usuario' },
  solicitante: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Usuario' },
  estado: {type: String, enum:['aceptada', 'cancelada', 'pendiente']},
}, { timestamps: true })

mongoose.model('Solicitud', SolicitudSchema)