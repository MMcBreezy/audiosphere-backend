import Sequelize from "sequelize";
import process from "process";
import config from "../config/config.json";

const env = process.env.NODE_ENV || "development";

let sequelize;

try {
  const { use_env_variable, database, username, password } = config[env];
  if (use_env_variable) {
    sequelize = new Sequelize(process.env[use_env_variable], config[env]);
  } else {
    sequelize = new Sequelize(database, username, password, config[env]);
  }
} catch (error) {
  console.error("Error establishing database connection:", error);
  process.exit(1);
}

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
