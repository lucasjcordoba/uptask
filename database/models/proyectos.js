'use strict';
module.exports = (sequelize, Sequelize) => {
  const Proyectos = sequelize.define('Proyectos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10)
    },
    name: {
      type: Sequelize.STRING(500),
      allowNull:false
    },
    
  }, {
    tablename: 'Proyectos',
    timestamps: true
  });


  return Proyectos;
};