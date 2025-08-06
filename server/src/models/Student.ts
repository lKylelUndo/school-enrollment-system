import { Model, DataTypes } from "sequelize";
import db from "../config/Database";

const sequelize = db.getSequelizeInstance();

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id"
        }
    },
    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isEnrolled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    enrolledAt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "students",
    timestamps: true,
    modelName: "Student",
  }
);

export default Student;
