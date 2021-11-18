const {Sequelize, DataTypes} = require('sequelize');

const Info_photos = sequelize.define('info_photos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  review_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING
  }
}, {
  sequelize: sequelize
});

module.exports = Info_photos;