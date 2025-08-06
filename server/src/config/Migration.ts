import db from "./Database";
import "./Associations";
import "../models/User";
// import "../models/Admin";
import "../models/DegreeProgram";
import "../models/Student";

const sequelize = db.getSequelizeInstance();

async function migrate() {
  try {
    // Just referencing the models is enough to register them
    await sequelize.sync({ alter: true });
    console.log("models are synchronized");
  } catch (error) {
    console.error(error);
  }
}

migrate();
