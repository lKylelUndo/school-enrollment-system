import { Dialect, Sequelize } from "sequelize";
import "dotenv/config";

class Database {
  public sequelize;

  constructor() {
    this.sequelize = new Sequelize(
      process.env.DB_NAME as string,
      process.env.DB_USER as string,
      process.env.DB_PASS as string,
      {
        host: process.env.DB_HOST as string,
        dialect: process.env.DB_DIALECT as Dialect,
      }
    );
  }

  async test() {
    try {
      await this.sequelize.authenticate();
      console.log(`success`);
      await this.sequelize.close();
    } catch (error) {
      console.log(error);
    }
  }

  getSequelizeInstance() {
    return this.sequelize;
  }
}

const db = new Database();
export default db;
//db.test();
