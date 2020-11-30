const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./routes'))


app.get('/', (req, res) => {
    res.send("Hello world")
})


module.exports = {
    app
}