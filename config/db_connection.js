// db.js
require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('./config.json'); // Adjust the path if necessary

// Use the development configuration
const dbConfig = config.development;

// Create a new instance of Sequelize
const sequelize = new Sequelize({
  database: dbConfig.database,
  username: dbConfig.username,
  password: dbConfig.password,
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

// Function to connect to the database
const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit if unable to connect
  }
};
connectDb();
module.exports = {
  connectDb,
  sequelize, // Export the sequelize instance if needed later
};
