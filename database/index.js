const express = require('express');
const {Sequelize, DataTypes} = require('sequelize');
const app = express();
const Info = require('../models/info.js');
const Info_photos = require('../models/Info_photos.js');
const Characteristics_data = require('../models/Characterisitcs_data.js');
const Characteristics_reviews = require('../models/Characteristics_reviews.js');
const port = 3000;
app.use(express.json());

const sequelize = new Sequelize('reviews_api', 'jkum1', '123', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false,
    freezeTableName: true,
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync();

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