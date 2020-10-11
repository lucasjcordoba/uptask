const express = require('express')
const router = express.Router()
const {body} = require('express-validator/check')

const proyectosController = require ('../controllers/proyectosController')
const tareasController = require ('../controllers/tareasController')

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
    router.post('/nuevo-proyecto/:id', 
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.actualizarProyecto)


    // Eliminar
    router.delete('/proyectos/:url', proyectosController.delete)
    
    //Tareas
    router.post('/proyectos/:url', tareasController.agregar)

    return router
}