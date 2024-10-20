import { Model, BuildOptions, Sequelize } from "sequelize/types";

export type ModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Model;
  initModel: (seq: Sequelize) => void;
  associate: (models: Models) => void;
};

export type Models = { [key: string]: ModelStatic };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ModelAttributes = { [key: string]: any };
