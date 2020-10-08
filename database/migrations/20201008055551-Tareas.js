'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tareas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tarea: {
        type: Sequelize.INTEGER(100),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      proyecto_id: {
        type: Sequelize.INTEGER(10),
          allowNull: false,
          references: {
            model: {
              tableName: 'Proyectos'
              },
              key: 'id'
            }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tareas');
  }
};