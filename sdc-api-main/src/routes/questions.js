const express = require('express');
const router = express.Router();

const {
  getQuestions,
  getAnswers,
  postQuestion,
  postAnswer,
  } = require('../controllers/questionsController.js');

router.get('/questions', getQuestions);

router.get('/questions/:question_id/answers', getAnswers);

router.post('/questions', postQuestion);

router.post('/questions/:question_id/answers', postAnswer);

// Implement:
// PUT /qa/questions/:question_id/helpful
// PUT /qa/questions/:question_id/report
// PUT /qa/answers/:answer_id/helpful
// PUT /qa/answers/:answer_id/report

module.exports = router;
