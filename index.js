const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const bodyParser = require('body-parser')

//helpers
const helpers = require('./helpers')

//static
app.use(express.static('public'))

//bodyParser
app.use(bodyParser.urlencoded({extended:true}))


//set view engine(pug)
app.set('view engine', 'pug')

//path para las vistar
app.set('views', path.join(__dirname, './views'))

//vardump
app.use((req, res, next) =>{
    res.locals.vardump = helpers.vardump;
    next();
})


app.use('/', routes())


//set port
app.listen(3005)
