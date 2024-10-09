const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database Name
  process.env.DB_USER, // Username
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST, // Host (usually localhost)
    port: process.env.DB_PORT, // Port (default is 5432)
    dialect: "postgres", // Specify PostgreSQL as the dialect
    logging: false, // Disable logging (optional)
  }
);

sequelize
  .authenticate()
  .then(() => console.log("PostgreSQL connected successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;
