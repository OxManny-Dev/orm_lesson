require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
//  database name that we want to connect to
  process.env.DB_NAME,
  //which user do we want to log in as?
  process.env.DB_USER,
//  what is the user's password
  process.env.DB_PASSWORD,
//  configuration object
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;