-- AlterTable
ALTER TABLE "Comment" ADD COLUMN "createdAt" DATETIME;
ALTER TABLE "Comment" ADD COLUMN "updatedAt" DATETIME;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN "createdAt" DATETIME;
ALTER TABLE "Post" ADD COLUMN "updatedAt" DATETIME;

-- AlterTable
ALTER TABLE "User" ADD COLUMN "createdAt" DATETIME;
ALTER TABLE "User" ADD COLUMN "updatedAt" DATETIME;
