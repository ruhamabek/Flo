/*
  Warnings:

  - You are about to drop the column `trugger` on the `WorkflowExecution` table. All the data in the column will be lost.
  - Added the required column `trigger` to the `WorkflowExecution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkflowExecution" DROP COLUMN "trugger",
ADD COLUMN     "trigger" TEXT NOT NULL;
