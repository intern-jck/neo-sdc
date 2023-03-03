const Review = require('../models/reviewModel.js');

// GET REQ
const getReviews = (req, res) => {
  console.log(req.query)
  Review.find({'product_id': product_id}).select('results')
  .exec()
  .then((doc) => {
    doc[0].product_id = req.params.product_id;
    doc[0].page = 1;
    doc[0].count = req.query.count;
    res.send(doc);
  })
  .catch((error) => {
    res.sendStatus(404);
    console.log(error);
  });
};


// const getReviewsMeta = (product_id) => {
//   return Review.find({'product_id': product_id}).select('meta')
//   .exec();
// };
// (req, res) => {
//   getReviewsMeta(req.params.product_id)
//   .then((doc) => {
//     const chars = doc[0].meta.characteristics;
//     for (let c in chars) {
//       chars[chars[c].name] = { 'id': c, 'value': chars[c].value.reduce((a, b) => (a + b)) / chars[c].value.length};
//       delete chars[c];
//     }
//     res.send(doc);
//   })
//   .catch((error) => {
//     res.sendStatus(404);
//     console.log(error)
//   });
// }



// //POST REQ
// const addReview = (review) => {
//   console.log('New Review', review);

//   // Update the review count stored in product 0
//   return Review.findOneAndUpdate(
//     { 'product_id': 0 },
//     {
//       '$inc': { 'review_count': 1 }
//     },
//     {
//       new: true,
//       strict: false
//     }
//   )
//   .lean()
//   .exec()
//   .then((doc) => {
//     console.log(doc.review_count);

//     // When adding a new review, we need to format it properly.
//     // We can store all of our update operations in objects,
//     // then use them as inputs for our updateOne,
//     // keeping things nice and neat.

//     // Store all the $inc operations in a single object
//     const incUpdates = {};

//     // Increment meta.ratings by 1
//     incUpdates['meta.ratings.' + review.rating] = 1;

//     // Increment meta.recommended by 1 condtionally
//     if (review.recommend === 'false') {
//       incUpdates['meta.recommended.0'] = 1;
//     } else if (review.recommend === 'true') {
//       incUpdates['meta.recommended.1'] = 1;
//     }

//     // Update for rest of review
//     const update = {
//       '$push': {
//         'results': {
//           'id': doc.review_count + 1,
//           'rating':  review.rating,
//           'date': new Date().toISOString(),
//           'summary': review.summary,
//           'body': review.body,
//           'recommend': review.recommend,
//           'reported': review.reported,
//           'reviewer_name': review.name,
//           'reviewer_email': review.email,
//           'response': review.response,
//           'helpfulness': review.helpfulness,
//         }
//       },
//       '$inc': incUpdates
//     }

//     // // We need to adjust the format to match whats stored in collection
//     for (let key in review.characteristics) {
//       update.$push['meta.characteristics.' + key + '.value'] = parseInt(review.characteristics[key])
//     }

//     // Finally, update review stored in collection.

//     const filter = { 'product_id': review.product_id };
//     const options = { 'upsert': true };

//     return Review.updateOne( filter, update, options )
//       .exec();
//       // .then((doc) => ( console.log(doc)))
//       // .catch((error) => (console.log(error)));

//   })
// };
// (req, res) => {
//   req.body.product_id = req.params.product_id;
//   addReview(req.body)
//     .then((doc) => {
//       console.log('POST MADE', doc)
//       res.sendStatus(201)
//     });
// }


// //PUT REQ
// // TODO: Implement these two.
// const markHelpful = (review_id) => {
// }

// const reportReview = (review_id) => {
// }

module.exports = {
  getReviews,
  // addReview, getReviewsMeta, markHelpful, reportReview
};
