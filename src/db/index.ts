import { Sequelize } from "sequelize";

require("dotenv").config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, NODE_ENV, DATABASE_URL } =
  process.env;

let sequelize: Sequelize;

if (NODE_ENV === "production") {
  sequelize = new Sequelize(DATABASE_URL!, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  sequelize = new Sequelize(DB_NAME!, DB_USERNAME!, DB_PASSWORD, {
    host: DB_HOST!,
    dialect: "postgres",
    logging: false,
  });
}

export default sequelize;
