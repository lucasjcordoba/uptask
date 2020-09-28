const db = require('../database/models')
const slug = require('slug')
exports.proyectosHome =  async (req, res)=> {
    const proyectos = await db.Proyectos.findAll()
    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
    })
  
}
exports.formularioProyectos = async(req, res)=>{
    const proyectos = await db.Proyectos.findAll()

    res.render('nuevoProyecto',{
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    })
}
exports.nuevoProyecto = async (req, res) => {
    const proyectos = await db.Proyectos.findAll()

    const {nombre} = req.body

    let errores = []

    if(!nombre) {
        errores.push({'texto': 'Agregar un nombre al Proyecto'})
    }

    if(errores.length > 0){
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores,
            proyectos
        })
    } else{
        
       const Proyecto= await db.Proyectos.create({nombre})
        res.redirect('/')
       
    }
}

exports.proyectoUrl= async(req, res, next)=> {
    const proyectos = await db.Proyectos.findAll()

    const proyecto = await db.Proyectos.findOne({
        where: {
            url: req.params.url
        }

    })

    if(!proyecto)
    return next();

    //Vista
    res.render('tareas',{
    nombrePagina: 'Tareas del Proyecto',
    proyecto,
    proyectos})
}

exports.formularioEditar = (req, res)=>{
    res.render('nuevoProyecto', {
        nombreDePagina: 'Editar Proyecto'
    })
}