-- CreateTable
CREATE TABLE "DataElement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "payload" JSONB,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3),

    CONSTRAINT "DataElement_pkey" PRIMARY KEY ("id")
);
