/*
  Warnings:

  - Added the required column `yearQuarter` to the `Has` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Has" ADD COLUMN     "yearQuarter" INTEGER NOT NULL;
