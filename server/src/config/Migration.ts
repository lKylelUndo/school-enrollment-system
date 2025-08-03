import db from "./Database";
import "../models/User";
// import "../models/Admin";
import "../models/DegreeProgram";

const sequelize = db.getSequelizeInstance();

async function migrate() {
  try {
    // Just referencing the models is enough to register them
    await sequelize.sync({ force: true });
    console.log("models are synchronized");
  } catch (error) {
    console.error(error);
  }
}

migrate();
