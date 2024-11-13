/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

  THIS WAS made because I had finished making the findEmail function in user services and chat said to run pnpm prisma migrate dev --name add-unique-to-name lol

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
