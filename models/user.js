import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Add more fields as needed
});

User.sync()
  .then(() =>
    console.log(
      "User table has been successfully created, if one doesn't exist"
    )
  )
  .catch((error) => console.log("This error occured", error));

export default User;
