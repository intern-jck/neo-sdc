const express = require('express');
const router = express.Router();

const {
  getReviews,
  // getReviewsMeta, addReview, markHelpful, reportReview
  } = require('../controllers/reviewsController.js');

// router.get('/:product_id/list', getReviews);
router.get('/', getReviews);

// router.get('/:product_id/meta', getReviewsMeta);
//
// router.post('/:product_id', addReview);

module.exports = router;
