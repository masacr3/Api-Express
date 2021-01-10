const express = require('express')
const Agenda = require('../models/Agenda')
let router = express.Router()

router
    .route('/')
    .get( (req, res) => {
        console.log('peticion pagina web')
        res.send('se ha conectado sastifactoriamente al servidor')
    })
    .post( (req, res) =>{
        let agenda = new Agenda({
            nombre : req.body.nombre,
            telefono : req.body.telefono,
            email : req.body.email
        })

        agenda.save()
            .then( data =>{
                res.send(data)
            })
            .catch(err =>{
                res.send(err)
            })

    })

module.exports = router