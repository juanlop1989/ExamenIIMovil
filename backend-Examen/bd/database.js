const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('logApp','root','1234',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;