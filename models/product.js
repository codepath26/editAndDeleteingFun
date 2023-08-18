const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define(
  'products',{
    id :{
      type : Sequelize.DataTypes.INTEGER,
      autoIncrement : true,
      allowNull : false,
      primaryKey : true
    },
    title : Sequelize.DataTypes.STRING,
    price : {
     type : Sequelize.DataTypes.DOUBLE,
     allowNull : false  
    },
    imageUrl : {
      type : Sequelize.STRING,
      allowNull : false
    },
    description : {
      type : Sequelize.DataTypes.STRING,
      allowNull : false
    }
  }
) 
module.exports = Product ;