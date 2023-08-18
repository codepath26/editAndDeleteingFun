const {Sequelize ,datatypes} = require('sequelize');
const sequelize = require('../util/database');


const User = sequelize.define(
  'user',
  {
    id : {
      type : Sequelize.INTEGER,
    allowNull : false,
    autoIncrement : true,
    primaryKey : true

    },
    name : Sequelize.STRING,
    emial : Sequelize.STRING
  }
) 
module.exports = User;
