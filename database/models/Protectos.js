const slug = require('slug')
const shortId = require('shortid')
module.exports = (sequelize, Sequelize) => {
  const Proyectos = sequelize.define('Proyectos', {
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

  return Proyectos;
};