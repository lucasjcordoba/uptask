const db = require('../database/models')

exports.proyectosHome = (req, res)=> {
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}
exports.formularioProyectos = (req, res)=>{
    res.render('nuevoProyecto',{
        nombrePagina: 'Nuevo Proyecto'
    })
}
exports.nuevoProyecto = async (req, res) => {
    const {nombre} = req.body

    let errores = []

    if(!nombre) {
        errores.push({'texto': 'Agregar un nombre al Proyecto'})
    }

    if(errores.length > 0){
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    } else{
       const Proyecto= await db.Proyectos.create({
            nombre: req.body.nombre
        })
        res.redirect('/')
       
    }
}