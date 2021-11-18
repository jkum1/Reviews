module.exports = (sequelize, DataTypes) => {
  return sequelize.define('info_photos', {
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
  });
};