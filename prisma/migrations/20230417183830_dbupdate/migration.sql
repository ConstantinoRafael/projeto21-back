/*
  Warnings:

  - Added the required column `name` to the `enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "enrollment" ADD COLUMN     "name" TEXT NOT NULL;
