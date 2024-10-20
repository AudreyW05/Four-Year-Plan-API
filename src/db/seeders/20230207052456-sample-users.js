/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";

const bcrypt = require("bcrypt");
const saltRounds = 10;

function hashPassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));
}

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert("users", [
      {
        email: "admin@example.com",
        password: hashPassword("asdasd"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
