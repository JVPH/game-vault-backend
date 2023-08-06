import "dotenv/config";
import { Sequelize } from "sequelize";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const sequelize = new Sequelize(process.env.DATABASE_URL!);

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    void sequelize.close();
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};

void main();
