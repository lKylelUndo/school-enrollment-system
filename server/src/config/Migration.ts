import db from "./Database";
import "./Associations";
import User from "../models/User";
// import "../models/Admin";
import "../models/DegreeProgram";
import "../models/Student";

import bcrypt from "bcrypt";

const sequelize = db.getSequelizeInstance();

async function migrate() {
  try {
    // Just referencing the models is enough to register them
    // await User.create({
    //   firstName: "admin",
    //   middleName: "A.",
    //   lastName: "admin",
    //   password: await bcrypt.hash("admin123", 10),
    //   email: "admin@yahoo.com",
    //   isAdmin: true,
    // });
  } catch (error) {
    console.error(error);
  }
}

migrate();
