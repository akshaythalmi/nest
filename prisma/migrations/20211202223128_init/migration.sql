/*
  Warnings:

  - You are about to drop the column `createdAt` on the `DataElement` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `DataElement` table. All the data in the column will be lost.
  - You are about to drop the column `payload` on the `DataElement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DataElement" DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "payload";
