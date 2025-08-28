/*
  Warnings:

  - A unique constraint covering the columns `[postName]` on the table `Posts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Posts_title_key";

-- CreateIndex
CREATE UNIQUE INDEX "Posts_postName_key" ON "Posts"("postName");
