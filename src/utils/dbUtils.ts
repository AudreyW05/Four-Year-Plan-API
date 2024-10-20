import { Sequelize } from "sequelize/types";

export async function authenticate(sequelize: Sequelize): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log(
      "⚡️[database]: connection to database established successfully"
    );
  } catch (err) {
    console.error("Unable to connect to db: ", err);
  }
}
