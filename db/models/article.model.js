const { Model, DataTypes, Sequelize } = require('sequelize');

const ARTICLE_TABLE = 'articles';

const articleSchema = {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  content: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  },
  portrait: {
    allowNull: false,
    type: DataTypes.STRING
  },
  resume: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  alt: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  status: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
};

class Article extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: ARTICLE_TABLE,
      modelName: 'Article',
      timeStamps: false
    }
  }
}


module.exports = { ARTICLE_TABLE, articleSchema, Article };
