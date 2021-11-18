const express = require('express');
const app = express();
const {Info, Info_photos, Characteristics_data, Characteristics_reviews} = require('./sequelize.js')
const port = 3000;
app.use(express.json());

app.get('/reviews', (req, res) => {
  var productId = req.body.product_id;
  var page = req.body.page === undefined ? 0:req.body.page;
  var count = req.body.count === undefined ? 5:req.body.count;
  var sort = req.body.sort === undefined ? 'newest':req.body.sort;
  if (sort === 'newest') {

  } else if (sort === 'helpful') {

  } else if (sort === 'relevant') {

  }
});

app.listen(port, () => console.log(`listening on port ${port}!`))