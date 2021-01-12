const express = require('express')
const Articulos = require('../models/articulos')
let router = express.Router()

router
    .route('/')
    .post( async (req, res) =>{
        console.log('el codigo es ',req.body.codigobarras)
        let status = await Articulos.exists( { _id : req.body.codigobarras })
        res.json( { existe : status })
    })

module.exports = router