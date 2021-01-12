const express = require('express')
const Articulos = require('../models/articulos')
let router = express.Router()

router
    .route('/')
    .post( (req, res) =>{
        let articulo = new Articulos({
            _id : req.body.codigobarras,
            marca : req.body.marca,
            producto : req.body.producto,
            precio : req.body.precio,
            preciopublico : req.body.preciopublico
        })

        articulo.save()
            .then( data => {
                res.send(data)
            })
            .catch( err =>{
                res.send(err)
            })
        
    })

module.exports = router