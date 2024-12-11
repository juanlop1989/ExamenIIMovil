
const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')

const Logs = sequelize.define('logs', {
  IdLog: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    postitionX: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    positionY: {
        type: DataTypes.FLOAT,
        allowNull: false

    },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false

},
},
{
    tableName: 'logs',
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
  }

)

  

module.exports=Logs;
