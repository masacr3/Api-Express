const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

const port = process.env.PORT || 5000

const cargardatos = require('./routes/cargardatos')
const verificacod = require('./routes/verificacod')

const moongose = require('mongoose')

moongose.connect('mongodb+srv://leopiola:martogato@cluster0.3jn0a.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser : true
})
.then( response =>{
    console.log('Se conecto sastifactoriamente al servidor de la NSA')
})
.catch( error =>{
    console.log('Error credenciales para conectarse a NSA')
})

app.use('/cargardatos', cargardatos)
app.use('/verificacod', verificacod)

app.listen(port, () => console.log(`server started on port ${port}`))