const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database') 
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { serialize } = require('v8');
const User = require('./models/user');
const Product = require('./models/product');
// db.execute('SELECT * FROM products').then((result)=>{console.log(result[0] , result[1]);}).catch((err)=>{console.log(err);})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req ,res,next) => {
  User.findByPk(1).then(
    user =>{
      req.user = user;
      next();
    }
  ).catch(err=>console.log(err));
})
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
Product.belongsTo(User, {constrains : true, onDelete  : "CASCADE"});
User.hasMany(Product);

sequelize.sync().then((res)=>{
  return User.findByPk(1)

}).then((user)=>{
  if(!user){
    return  User.create({name : "Rocky" , email : 'useremain@gmail.com'})
  }
  return user;
  // return Promise.resolve(user); but we are in then block so that return result automatically convert into a promiss
  
}).then((user)=>{
  // console.log(user);
  // app.listen(5000);
app.listen(3000);
})
.catch(err=>console.log(err))


