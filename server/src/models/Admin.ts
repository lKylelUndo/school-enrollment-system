import { DataType, DataTypes } from "sequelize";
import db from "../config/Database";

const sequelize = db.getSequelizeInstance();

const Admin = sequelize.define("Admin", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
}, {
  timestamps: true,
  tableName: "admin"
});

export default Admin;
