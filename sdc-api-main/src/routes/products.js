const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProduct,
  getProductStyles,
  getProductRelated,
  } = require('../controllers/productsController.js');

router.get('/', getProducts);

router.get('/:product_id', getProduct);

router.get('/:product_id/styles', getProductStyles);

router.get('/:product_id/related', getProductRelated);

module.exports = router;
