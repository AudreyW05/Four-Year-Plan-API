import express, { Application } from "express";

import UserController from "./controllers/UserController";
import UserRepository from "./repositories/UserRepository";
import UserRouter from "./routes/UserRoutes";
import UserService from "./services/UserService";

import sequelize from "./db";
import models from "./models";

import Container from "./utils/container";

export default class App {
  public app: Application;

  constructor() {
    this.app = express();
  }

  public initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, x-auth-token"
      );
      next();
    });
  }

  public initModels() {
    Object.keys(models).forEach((key) => {
      models[key].initModel(Container.getInstance().get("db"));
    });

    Object.keys(models).forEach((key) => {
      if ("associate" in models[key]) {
        models[key].associate(models);
      }
    });
  }

  public initControllers() {
    this.app.use("/users", UserRouter());
  }

  public async initContainer() {
    const container = Container.getInstance();
    container.register("db", sequelize, []);

    // Repositories
    container.register("UserRepository", UserRepository, ["db"]);

    // Services
    container.register("UserService", UserService, ["UserRepository"]);

    // Controllers
    container.register("UserController", UserController, ["UserService"]);

    // Middlewares
    // insert middlewares here
  }

  public listen(port: string) {
    this.app.listen(port, () => {
      console.log(`⚡️[server]: Server is running on port ${port}`);
    });
  }
}
