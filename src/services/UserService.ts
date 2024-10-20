import { UserAttributes, UserCreationAttributes } from "../models/User";
import UserRepository from "../repositories/UserRepository";
import User from "../models/User";

export default class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers() {
    return this.userRepository.getAll() as unknown as User[];
  }

  async getOneUserById(id: number, showPassword = false) {
    return (
      await (showPassword
        ? this.userRepository.getScopeWithFilters({ id }, "withPassword")
        : this.userRepository.getWithFilters({ id }))
    )[0] as User;
  }

  async getOneUserByEmail(email: string, showPassword = false) {
    return (
      await (showPassword
        ? this.userRepository.getScopeWithFilters({ email }, "withPassword")
        : this.userRepository.getWithFilters({ email }))
    )[0] as User;
  }

  async bulkGetUserByEmails(emails: string[], showPassword = false) {
    return (await (showPassword
      ? this.userRepository.getScopeWithFilters(
          { email: emails },
          "withPassword"
        )
      : this.userRepository.getWithFilters({
          email: emails,
        }))) as User[];
  }

  async createOneUser(user: UserCreationAttributes) {
    return (await this.userRepository.createOne(user)) as User;
  }

  async updateOneUserById(id: number, attrs: UserAttributes) {
    return this.userRepository.updateOne(attrs, { id });
  }

  async deleteOneUserById(id: number) {
    return this.userRepository.deleteOne({ id });
  }
}
