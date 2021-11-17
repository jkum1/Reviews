const express = require('express');
const {Sequelize, DataTypes} = require('sequelize');
const app = express();
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

const Product_id = sequelize.define('product_id', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize: sequelize
});

const Reviews = sequelize.define('reviews', {
  review_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  FK_product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER
  },
  summary: {
    type: DataTypes.STRING
  },
  recommend: {
    type: DataTypes.BOOLEAN
  },
  response: {
    type: DataTypes.STRING
  },
  body: {
    type: DataTypes.STRING
  },
  date: {
    type: DataTypes.INTEGER
  },
  reviewer_name: {
    type: DataTypes.STRING
  },
  helpfulness: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize: sequelize
});

const Photos = sequelize.define('photos', {
  photo_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING
  },
  FK_review_id: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: sequelize
});

const Characteristics = sequelize.define('characteristics', {
  character_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  FK_product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Length: {
    type: DataTypes.DECIMAL
  },
  Fit: {
    type: DataTypes.DECIMAL
  },
  Comfort: {
    type: DataTypes.DECIMAL
  },
  Quality: {
    type: DataTypes.DECIMAL
  }
}, {
  sequelize: sequelize
})

const Info = sequelize.define('info', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER
  },
  rating: {
    type: DataTypes.INTEGER
  },
  date: {
    type: DataTypes.BIGINT
  },
  summary: {
    type: DataTypes.TEXT
  },
  body: {
    type: DataTypes.TEXT
  },
  recommended: {
    type: DataTypes.BOOLEAN
  },
  reported: {
    type: DataTypes.BOOLEAN
  },
  reviewer_name: {
    type: DataTypes.TEXT
  },
  reviewer_email: {
    type: DataTypes.TEXT
  },
  response: {
    type: DataTypes.TEXT
  },
  helpfulness: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize: sequelize
});

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

const Characteristics_reviews = sequelize.define('char_reviews', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  characteristic_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  review_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize: sequelize
});

sequelize.sync();

app.listen(port, () => console.log(`listening on port ${port}!`))