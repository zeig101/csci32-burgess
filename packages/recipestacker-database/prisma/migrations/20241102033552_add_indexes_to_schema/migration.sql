-- CreateIndex
CREATE INDEX `IngredientMeasurement_recipe_id_idx` ON `IngredientMeasurement`(`recipe_id`);

-- CreateIndex
CREATE INDEX `Recipe_user_id_idx` ON `Recipe`(`user_id`);
