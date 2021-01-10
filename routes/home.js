const express = require('express')
const { route } = require('./productos')
let router = express.Router()

router
    .route('/')
    .get( (req, res) => {
        console.log('peticion pagina web')
        res.send('se ha conectado sastifactoriamente al servidor')
    })
    .post( (req, res) =>{
        console.log('POST : Se han conectado desde la web')
        res.send('POST : se ha enviado los datos sastifactoriamente')
    })

module.exports = router