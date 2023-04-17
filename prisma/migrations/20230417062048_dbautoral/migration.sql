/*
  Warnings:

  - Added the required column `instagram` to the `enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlProfile` to the `enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlYoutube` to the `enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "enrollment" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "instagram" TEXT NOT NULL,
ADD COLUMN     "instruments" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "urlProfile" TEXT NOT NULL,
ADD COLUMN     "urlYoutube" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sessions" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
