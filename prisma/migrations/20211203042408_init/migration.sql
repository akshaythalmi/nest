/*
  Warnings:

  - Added the required column `createdBy` to the `DataElement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DataElement" ADD COLUMN     "createdAt" TIMESTAMP(3),
ADD COLUMN     "createdBy" TEXT NOT NULL,
ADD COLUMN     "payload" JSONB;
