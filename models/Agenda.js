const mongoose = require('mongoose')
const AgendaSchema = mongoose.Schema({
    nombre : String,
    telefono : String,
    email: String
})

module.exports = mongoose.model('Agenda',AgendaSchema)