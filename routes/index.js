const express = require('express')
const router = express.Router()
const {body} = require('express-validator/check')

const proyectosController = require ('../controllers/proyectosController')

module.exports = function(){
    router.get('/', proyectosController.proyectosHome
    );
    router.get('/nuevo-proyecto', proyectosController.formularioProyectos
    );
    router.post('/nuevo-proyecto', 
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.nuevoProyecto
    );

    //List

    router.get('/proyectos/:url', proyectosController.proyectoUrl)


    //Editar
    router.get('/proyecto/editar/:id', proyectosController.formularioEditar)

    return router
}