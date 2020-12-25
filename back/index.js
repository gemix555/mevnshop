const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')

/** BD */
mongoose.connect("mongodb+srv://admin:admin@cluster0.1kaqz.mongodb.net/mevnshop", {
    useCreateIndex: true, //index
    useNewUrlParser: true, //id
    useUnifiedTopology: true,
}).then(r => { console.log("BD Connect")});

/** initial */
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/** Server */
const PORT = 3000
http.createServer({}, app).listen(PORT)
console.log(`Server start http://localhost:${PORT}`)