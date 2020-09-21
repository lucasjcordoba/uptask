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
exports.nuevoProyecto = (req, res) => {
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
    }
}