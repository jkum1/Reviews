const {Sequelize, DataTypes} = require('sequelize');

const Characteristics_data = sequelize.define('char_data', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING
  }
}, {
  sequelize: sequelize
});

module.exports = Characteristics_data;