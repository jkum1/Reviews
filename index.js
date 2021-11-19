const express = require('express');
const app = express();
const {Info, Info_photos, Characteristics_data, Characteristics_reviews} = require('./database/sequelize.js')
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/reviews', (req, res) => {
  var productId = req.body.product_id;
  var page = req.body.page === undefined ? 0:req.body.page;
  var count = req.body.count === undefined ? 5:req.body.count;
  var sort = req.body.sort === undefined ? 'newest':req.body.sort;

  var final = { //data format which will be sent over
    product: productId,
    page: page,
    count: count
  };

  var orderLabel; //for query filter purposes
  if (sort === 'newest') {
    orderLabel = [['date', 'ASC']];
  } else if (sort === 'helpful') {
    orderLabel = [['helpfulness', 'ASC']];
  } else if (sort === 'relevant') {
    orderLabel = [['rating', 'ASC']];
  }

  Info.findAll({ //finds all matching productID reviews with limit of 5
    where: {
      product_id: productId
    },
    order: orderLabel,
    limit: count,
  })
    .then((data) => {

      var promiseOfPhotos = data.map((entry) => { //finds all photos associated with the review
        return Info_photos.findAll({
          where: {
            review_id: entry.id,
          }
        })
      });

      Promise.all(promiseOfPhotos) //gets all photos and shapes into desired format sent.
        .then((result, err) => {

          if (err) {
            throw err;
          } else {
          for (var i = 0; i < result.length; ++i) {
            data[i].dataValues['photos'] = result[i];
            data[i].dataValues['review_id'] = data[i].dataValues.id;
            delete data[i].dataValues['id'];
            delete data[i].dataValues['product_id'];
          }
          final['results'] = data;
          res.send(final);
          }

        });

    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/reviews/meta', (req, res) => {
  var productId = req.body.product_id;

  var final = { //final format needed to send over data
    product_id: productId
  };

  Info.findAll({ //finds all reviews where productId matches
    where: {
      product_id: productId
    },
    attributes: ['rating', 'recommended']
  })
    .then((ratings_reccomended) => {

      var tempRatings = {}; //container for all ratings (1-5) and there values
      var tempReccomended = { //container for boolean recomend
        false: 0,
        true: 0
      };

      for (var i = 0; i < ratings_reccomended.length; ++i) {
        var valueRating = ratings_reccomended[i].rating;
        var valueReccomended = ratings_reccomended[i].recommended;
        if (tempRatings[valueRating] !== undefined) {
          tempRatings[valueRating] += 1;
        } else {
          tempRatings[valueRating] = 1;
        }
        if (valueReccomended) {
          tempReccomended['true'] += 1;
        } else {
          tempReccomended['false'] += 1;
        }
      }

      final['ratings'] = tempRatings;
      final['recommended'] = tempReccomended;

    })
    .then((empty, err) => { //then we look into characteristics

      var charComplete = {}; //container for characteristics
      if (err) {
        throw err;
      } else {
        Characteristics_data.findAll({ //finds all char associated with the product id
          where: {
            product_id: productId
          }
        })
          .then((data, err) => {

            if (err) {
              throw err;
            } else {
              var list = data.map((entry) => { //finds all reviews asoicated using the table
                return Characteristics_reviews.findAll({
                  where: {
                    characteristic_id: entry.id
                  }
                })
              });
              Promise.all(list)
                .then((arrOfValues, err) => {

                  if (err) {
                    throw err;
                  } else {
                    for (var i = 0; i < arrOfValues.length; ++i) { //calculates avg
                      var avg = 0;
                      for (var n = 0; n < arrOfValues[i].length; ++n) {
                        avg += arrOfValues[i][n].value;
                      }
                      avg = avg/arrOfValues[i].length;
                      charComplete[data[i].name] = {
                        id: data.id,
                        average: avg
                      }
                    }
                    final['characteristics'] = charComplete;
                    res.send(final);
                  }
                })

            }
          });

      }

    })
    .catch((err) => {
      res.send(err);
    })
});

app.post('/reviews', (req, res) => {
  Info.create({ //creates review in db
    product_id: req.body.product_id,
    rating: req.body.rating,
    summary: req.body.summary,
    body: req.body.body,
    date: Date.now(),
    recommended: req.body.recommend,
    reviewer_name: req.body.name,
    reviewer_email: req.body.email
  })
  .then((data, err) => {

    var listA = req.body.photos.map((entry) => { //creates photos in db associated with that review
      return Info_photos.create({
        review_id: data.id,
        url: entry
      })
    });
    var photos = Promise.all(listA);

    var listB = Object.keys(req.body.characteristics).map((entry) => { //creates connection between review and char
      return Characteristics_reviews.create({
        characteristic_id: entry,
        review_id: data.id,
        value: req.body.characteristics[entry]
      })
    });
    var reviews_char = Promise.all(listB);

    Promise.all(listA, listB)
      .then((entry, err) => {

        if (err) {
          throw err;
        } else {
          res.send(entry);
        }

      });

  })
  .catch((err) => {
    res.send(err);
  });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  Info.update({recommended: true}, {
    where: {
      id: req.body.review_id
    }
  })
    .then((data, err) => {
      if (err) {
        throw err;
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.send(err);
    })
});

app.put('/reviews/:review_id/report', (req, res) => {
  Info.update({reported: true}, {
    where: {
      id: req.body.review_id
    }
  })
    .then((data, err) => {
      if (err) {
        throw err;
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.send(err);
    })
});

app.listen(port, () => console.log(`listening on port ${port}!`))