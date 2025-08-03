import { DataTypes } from "sequelize";
import db from "../config/Database";

const sequelize = db.getSequelizeInstance();

const DegreeProgram = sequelize.define(
  "DegreePrograms",
  {
    degreeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    degreeDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    degreeDepartment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "degreePrograms",
  }
);

export default DegreeProgram;
