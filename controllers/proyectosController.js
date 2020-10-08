const db = require('../database/models')
const slug = require('slug')
exports.proyectosHome =  async (req, res)=> {
    const proyectos = await db.Proyecto.findAll()
    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
    })
  
}
exports.formularioProyectos = async(req, res)=>{
    const proyectos = await db.Proyecto.findAll()

    res.render('nuevoProyecto',{
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    })
}
exports.nuevoProyecto = async (req, res) => {
    const proyectos = await db.Proyecto.findAll()

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
        
       await db.Proyecto.create({nombre})
        res.redirect('/')
       
    }
}

exports.proyectoUrl= async(req, res, next)=> {
   
    const proyectosPromise = db.Proyecto.findAll()

    const proyectoPromise = db.Proyecto.findOne({
        where : {
            url: req.params.url
        }
    });

    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise])

    if(!proyecto)
    return next();

    //Vista
    res.render('tareas',{
    nombrePagina: 'Tareas del Proyecto',
    proyecto,
    proyectos})
}

exports.formularioEditar = async (req, res)=>{

    const proyectosPromise = db.Proyecto.findAll()

    const proyectoPromise = db.Proyecto.findOne({
        where : {
            id: req.params.id
        }
    });

    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise])

    res.render('nuevoProyecto', {
        nombreDePagina: 'Editar Proyecto',
        proyectos,
        proyecto
    })
}

exports.actualizarProyecto = async (req, res) => {
    const proyectos = await db.Proyecto.findAll()

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
        
        await db.Proyecto.update({
            nombre: nombre},{
                where: {
                    id: req.params.id
                }
            })
        res.redirect('/')
       
    }
}

exports.delete = async (req, res, next) => {
    //console.log(req.query);

    const {urlProyecto} = req.query;

    const resultado = await db.Proyecto.destroy(
        {where: {
            url: urlProyecto
        }}
    )

    res.status(200).send('Proyecto eliminado correctamente')
}