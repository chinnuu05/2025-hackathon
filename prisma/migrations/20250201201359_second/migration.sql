/*
  Warnings:

  - You are about to drop the column `body` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `fromEmail` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `sentAt` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `toEmail` on the `Email` table. All the data in the column will be lost.
  - Added the required column `date` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toAddress` to the `Email` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Email" DROP COLUMN "body",
DROP COLUMN "fromEmail",
DROP COLUMN "sentAt",
DROP COLUMN "toEmail",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sender" TEXT NOT NULL,
ADD COLUMN     "toAddress" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CompanySender" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "total_number_of_emails_sent" INTEGER NOT NULL,
    "monthly_emails_sent" INTEGER NOT NULL,

    CONSTRAINT "CompanySender_pkey" PRIMARY KEY ("id")
);
