import Student from "../models/Student";
import User from "../models/User";

User.hasOne(Student, {
  foreignKey: "userId",
});

Student.belongsTo(User, {
  foreignKey: "userId",
});
