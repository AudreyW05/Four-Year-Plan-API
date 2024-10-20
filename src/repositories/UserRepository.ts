import { Sequelize } from "sequelize/types";

import User from "../models/User";
import { ModelStatic } from "../types";
import BaseRepository from "./BaseRepository";

export default class UserRepository extends BaseRepository {
  constructor(db: Sequelize) {
    super(db.models[User.name] as ModelStatic);
  }
}
