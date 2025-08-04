import { DataTypes, Model } from "sequelize";
import db from "../config/Database";

const sequelize = db.getSequelizeInstance();

class DegreeProgram extends Model {
  declare id: number;
  declare degreeName: string;
  declare degreeDescription: string;
  declare degreeDepartment: string;
}

DegreeProgram.init(
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
    sequelize,
    modelName: "DegreeProgram",
    tableName: "degreeprograms",
    timestamps: true,
  }
);

export default DegreeProgram;
