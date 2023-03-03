const PORT = 3000;
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const mongoURL = `mongodb://127.0.0.1:27017/mockapp`;

mongoose.connect(mongoURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB Connected!`);
  })
  .catch((err) => {
    console.log(`MongoDB ERR ${err}`);
  });

//Routes
const productsRouter = require('./routes/products.js');
const questionsRouter = require('./routes/questions.js');
// const relatedRouter = require('./routes/related.js');
// const reviewsRouter = require('./routes/reviews.js');

app.use('/products', productsRouter);
app.use('/qa', questionsRouter);
// app.use('/related', relatedRouter);
// app.use('/reviews', reviewsRouter);

app.listen(PORT, function() {
  console.log(`@http://localhost:${PORT} on port ${PORT}`);
});
