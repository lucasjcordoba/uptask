const slug = require('slug')
const shortId = require('shortid')
module.exports = (sequelize, Sequelize) => {
  const Tarea = sequelize.define('Tarea', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10)
    },
    tarea: {
      type: Sequelize.INTEGER(100),
      allowNull:false
    },
    estado: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    proyecto_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    }
    
  }, {
    tablename: 'Tareas',
    timestamps: true
  });

  Tarea.associate = function(models) {

    Tarea.belongsTo(models.Proyecto, {
      as: 'proyecto',
      foreignKey: 'proyecto_id'
    });
   

  }

  return Tarea;
};