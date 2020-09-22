'use strict';
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
    
  }, {
    tablename: 'Proyectos',
    timestamps: true
  });

  return Proyectos;
};