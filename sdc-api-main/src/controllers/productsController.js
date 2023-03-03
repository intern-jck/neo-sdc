const Product = require('../models/productModel.js');

// GET REQ
const getProducts = (req, res) => {
  console.log('Get All Products', req.query)
  Product.find()
  .sort({'product_id': 1})
  .limit(10)
  .select({
    'product_id': 1,
    'name': 1,
    'slogan': 1,
    'description': 1,
    'category': 1,
    'default_price': 1,
  })
  .exec()
  .then((doc) => {
    res.send(doc);
  })
  .catch((error) => {
    res.sendStatus(404);
    console.log('Get Product Error:', error);
  });
};

const getProduct = (req, res) => {
  console.log('Get Product', req.params.product_id);
  Product.find({'product_id': req.params.product_id})
  .select({
    'product_id': 1,
    'name': 1,
    'slogan': 1,
    'description': 1,
    'category': 1,
    'default_price': 1,
    'features': 1,
  })
  .exec()
  .then((doc) => {
    res.send(doc);
  })
  .catch((error) => {
    console.log('Get Product Error:', error);
    res.sendStatus(404);
  });
};

// GET REQ
const getProductStyles = (req, res) => {
  console.log('Get Product Styles', req.params.product_id)
  Product.find({'product_id': req.params.product_id})
  .select({
    'product_id': 1,
    'styles': 1,
  })
  .exec()
  .then((doc) => {
    res.send(doc);
  })
  .catch((error) => {
    res.sendStatus(404);
    console.log('Get Product Error:', error);
  });
};

const getProductRelated = (req, res) => {
  console.log('Get Product', typeof req.params.product_id);
  res.sendStatus(404);
  // Product.find({'product_id': req.params.product_id})
  // .exec()
  // .then((doc) => {
  //   res.send(doc);
  // })
  // .catch((error) => {
  //   console.log('Get Product Error:', error);
  //   res.sendStatus(404);
  // });
};

module.exports = {
  getProducts,
  getProduct,
  getProductStyles,
  getProductRelated,
};
