const Question = require('../models/questionModel.js');
const Answer = require('../models/answerModel.js');

// GET REQ
const getQuestions = (req, res) => {
  console.log('Get Questions', req.query)
  Question.find()
  .limit(10)
  .sort('product_id')
  // .limit(10)
  .select({
    'product_id': 1,
    'results': 1,
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

const getAnswers = (req, res) => {
  console.log('Get Answers', req.params.question_id);
  Question.findOne(
    {'results.question_id': req.params.question_id},
    {'results': 1, '_id': 0}
  )
  .exec()
  .then((doc) => {
    // console.log(doc.results)
    doc.results.forEach((result) => {
      // console.log(result.question_id, req.params.question_id)
      if (result.question_id === parseInt(req.params.question_id)) {
        console.log(result)
        res.send(result);
      }
    })
    // res.send(doc);
  })
  .catch((error) => {
    console.log('Get Product Error:', error);
    res.sendStatus(404);
  });
};

// GET REQ
const postQuestion = (req, res) => {
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

const postAnswer = (req, res) => {
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
  getQuestions,
  getAnswers,
  postQuestion,
  postAnswer,
};
