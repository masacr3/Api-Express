const mongoose = require('mongoose')
const ArticulosSchema = mongoose.Schema({
    _id : String,
    marca : String,
    producto: String,
    precio : Number,
    preciopublico : Number
},{
    versionKey : false
})

module.exports = mongoose.model('Articulos',ArticulosSchema)