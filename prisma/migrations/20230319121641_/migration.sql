/*
  Warnings:

  - You are about to drop the column `locationIndex` on the `Location` table. All the data in the column will be lost.
  - Added the required column `locationindex` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "locationIndex",
ADD COLUMN     "locationindex" TEXT NOT NULL;
