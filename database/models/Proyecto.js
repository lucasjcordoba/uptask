const slug = require('slug')
const shortId = require('shortid')
module.exports = (sequelize, Sequelize) => {
  const Proyecto = sequelize.define('Proyecto', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10)
    },
    nombre: {
      type: Sequelize.STRING(500),
      allowNull:false
    },
    url: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    
  },{
    hooks:{
      beforeCreate(proyecto){
        const url = slug(proyecto.nombre).toLowerCase();

        proyecto.url= `${url}-${shortId.generate()}`
      }
    }
  }, {
    tablename: 'Proyectos',
    timestamps: true
  });

  Proyecto.associate = function(models) {

    Proyecto.hasMany(models.Tarea, {
      as: 'proyecto',
      foreignKey: 'proyecto_id'
    });
   

  }

  return Proyecto;
};