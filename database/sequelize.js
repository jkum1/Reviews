const {Sequelize, DataTypes} = require('sequelize');
const InfoModel = require('../models/info.js');
const Info_photosModel = require('../models/Info_photos.js');
const Characteristics_dataModel = require('../models/Characteristics_data.js');
const Characteristics_reviewsModel = require('../models/Characteristics_reviews.js');

const sequelize = new Sequelize('reviews_api', 'jkum1', '123', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false,
    freezeTableName: true,
  },
  logging: false
});

const Info = InfoModel(sequelize, Sequelize);
const Info_photos = Info_photosModel(sequelize, Sequelize);
const Characteristics_data = Characteristics_dataModel(sequelize, Sequelize);
const Characteristics_reviews = Characteristics_reviewsModel(sequelize, Sequelize);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync();

module.exports = {
  Info,
  Info_photos,
  Characteristics_data,
  Characteristics_reviews
}