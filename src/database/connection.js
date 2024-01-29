const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "postgres",
  password: "postgres",
  database: "db_book",
  host: "localhost",
  port: 5432,
});

module.exports = sequelize;
