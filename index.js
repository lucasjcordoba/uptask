const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const bodyParser = require('body-parser')


//static
app.use(express.static('public'))

//bodyParser
app.use(bodyParser.urlencoded({extended:true}))


//set view engine(pug)
app.set('view engine', 'pug')

//path
app.set('views', path.join(__dirname, './views'))

app.use('/', routes())


//set port
app.listen(2000)
