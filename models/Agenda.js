const mongoose = require('mongoose')
const AgendaSchema = mongoose.Schema({
    nombre : String,
    telefono : String,
    email: String
},{
    versionKey : false
})

module.exports = mongoose.model('Agendas',AgendaSchema)