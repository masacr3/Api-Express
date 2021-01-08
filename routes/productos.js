const express = require("express")
let router = express.Router()

router
    .route("/")
    .get( (req, res) =>{
        console.log('api GET producto')
        res.send("metodo get ahreeeeeee")
    } )

module.exports = router