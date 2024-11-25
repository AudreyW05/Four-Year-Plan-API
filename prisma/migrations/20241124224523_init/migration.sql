/*
  Warnings:

  - Added the required column `units` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "units" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Course" RENAME COLUMN "credits" TO "units";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN "category" VARCHAR(255) NOT NULL DEFAULT 'others';