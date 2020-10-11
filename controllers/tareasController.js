const db = require('../database/models')


exports.agregar = async (req, res) => {
    const proyecto = await db.Proyecto.findOne({
        where: {
            url: req.params.url
        }
    })

    console.log(proyecto);
}