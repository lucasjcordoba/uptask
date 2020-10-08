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
        
       await db.Proyectos.create({nombre})
        res.redirect('/')
       
    }
}

exports.proyectoUrl= async(req, res, next)=> {
   
    const proyectosPromise = db.Proyectos.findAll()

    const proyectoPromise = db.Proyectos.findOne({
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

    const proyectosPromise = db.Proyectos.findAll()

    const proyectoPromise = db.Proyectos.findOne({
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
        
        await db.Proyectos.update({
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

    const resultado = await db.Proyectos.destroy(
        {where: {
            url: urlProyecto
        }}
    )

    res.status(200).send('Proyecto eliminado correctamente')
}