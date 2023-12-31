const Product = require('../models/product');
const Cart = require('../models/cart');
const { where } = require('sequelize');

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((prodcuts)=>{
   res.render('shop/product-list' , {
     prods : prodcuts,
     pageTitle :'products',
     path : '/products'
   })
  }).catch(err=>console.log(err));
 
   
  
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findAll({where : {id : prodId}}).then((product)=>{
      res.render('shop/product-detail', {
        product: product[0],
        pageTitle: product.title,
        path: '/products'
      })}).catch(err=>console.log(err))
  // Product.findByPk(prodId).then((product)=>{
  //   res.render('shop/product-detail', {
  //     product: product,
  //     pageTitle: product.title,
  //     path: '/products'
  //   });
  // }).catch(err=>console.log(err));
};
exports.getIndex = (req, res, next) => {
 Product.findAll()
 .then((prodcuts)=>{
  res.render('shop/index' , {
    prods : prodcuts,
    pageTitle :'Shop',
    path : '/'
  })
 }).catch(err=>console.log(err));

  
 } 

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
