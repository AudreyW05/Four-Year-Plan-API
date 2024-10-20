import { Transaction } from "sequelize/types";
import { ModelStatic, ModelAttributes } from "../types";

interface Filter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export interface TransactionOptions {
  transaction: Transaction;
}

export default class BaseRepository {
  protected model: ModelStatic;

  constructor(model: ModelStatic) {
    this.model = model;
  }

  async getAll(options?: TransactionOptions) {
    return this.model.findAll({ ...options });
  }

  async getAllWithExclude(exclude: string[]) {
    return this.model.findAll({ attributes: { exclude } });
  }

  async getWithFilters(filter: Filter, options?: TransactionOptions) {
    return this.model.findAll({ where: filter, ...options });
  }

  async getScopeWithFilters(filter: Filter, scope: string) {
    return this.model.scope(scope).findAll({ where: filter });
  }

  async bulkCreate(data: ModelAttributes[], options?: TransactionOptions) {
    return this.model.bulkCreate([...data], { ...options });
  }

  async createOne(data: ModelAttributes, options?: TransactionOptions) {
    return this.model.create({ ...data }, { ...options });
  }

  async updateOne(
    newValue: ModelAttributes,
    filter: Filter,
    options?: TransactionOptions
  ) {
    const instance = await this.model.findOne({ where: filter, ...options });
    return await instance?.update(newValue, options);
  }

  async bulkUpdate(
    newValues: ModelAttributes[],
    primaryKeys: Array<string>,
    options?: TransactionOptions
  ) {
    return this.model.bulkCreate(newValues, {
      updateOnDuplicate: primaryKeys,
      ...options,
    });
  }

  async deleteOne(filter: Filter, options?: TransactionOptions) {
    const instance = await this.model.findOne({ where: filter, ...options });
    return await instance?.destroy(options);
  }

  //optional filter, if none is provided all instances of the model will be destroyed
  async bulkDelete(filter?: Filter, options?: TransactionOptions) {
    return this.model.destroy({ where: filter || {}, ...options });
  }
}
