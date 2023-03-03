const {Schema, model} = require('mongoose');

const QuestionModel = new Schema({
  product_id: String,
  results: [{
      question_id: Number,
      question_body: String,
      question_date: Date,
      asker_name: String,
      asker_email: String,
      question_helpfulness: Number,
      reported: Boolean,
      answer_ids: []
    }]
});

const Question = model('Questions', QuestionModel);
module.exports = Question;
