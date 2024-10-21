/*
  Warnings:

  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IngredientMeasurement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Ingredient`;

-- DropTable
DROP TABLE `IngredientMeasurement`;

-- DropTable
DROP TABLE `Recipe`;

-- CreateTable
CREATE TABLE `Game` (
    `game_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `genre1_id` VARCHAR(191) NOT NULL,
    `genre2_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`game_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `genre_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`genre_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `review_id` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL DEFAULT 0,
    `user_id` VARCHAR(191) NOT NULL,
    `game_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`review_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
