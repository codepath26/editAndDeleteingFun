const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complited','root','Parth@Sagar26',{
  dialect : 'mysql',
  host : 'localhost'
});
module.exports = sequelize ;