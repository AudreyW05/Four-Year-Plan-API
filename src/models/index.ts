import fs from "fs";
import path from "path";
import { Models } from "../types";

const models: Models = {};
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename;
  })
  .forEach((file) => {
    const clazzName = file.substring(0, file.length - 3); // remove .ts or .js from the back

    if (clazzName.includes(".")) {
      return;
    }

    const model = require(path.join(__dirname, clazzName)); // this is the class
    models[model.default.name] = model.default; // we export default from our models
  });

export { default as User } from "./User";

export default models;
