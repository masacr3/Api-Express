const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const productos = require('./routes/productos')

app.use(express.json())
app.use('/productos', productos)

app.listen(port, () => console.log(`server started on port ${port}`))