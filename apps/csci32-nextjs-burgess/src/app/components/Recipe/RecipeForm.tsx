import { Button } from '@repo/ui/button'
import { Field } from '@repo/ui/field'
import { FieldGroup } from '@repo/ui/fieldGroup'
import { Flex } from '@repo/ui/flex'
import { Header } from '@repo/ui/header'
import { Input } from '@repo/ui/input'
import { Label } from '@repo/ui/label'
import { Variant } from '@repo/ui/variant'
import { useState } from 'react'

export function RecipeForm() {
  const [recipeFormData, setRecipeFormData] = useState({ name: '', description: '' })
  const [ingredientMeasurements, setIngredientMeasurements] = useState([
    {
      ingredient: {
        name: '',
        description: '',
      },
      unit: '',
      quantity: '',
    },
  ])

  return (
    <>
      <Header variant="h2">Create Recipes</Header>
      <form className="flex flex-col gap-4">
        <FieldGroup>
          <Field>
            <Label htmlFor="recipe-name">Recipe name</Label>
            <Input
              name="recipe-name"
              id="recipe-name"
              placeholder="Enter a recipe name"
              value={recipeFormData.name}
              onChange={(newName) => {
                setRecipeFormData({ ...recipeFormData, name: newName })
              }}
            />
          </Field>
          <Field>
            <Label htmlFor="recipe-description">Recipe description</Label>
            <Input
              name="recipe-description"
              id="recipe-description"
              placeholder="Enter a recipe description"
              value={recipeFormData.description}
              onChange={(newDescription) => {
                setRecipeFormData({ ...recipeFormData, description: newDescription })
              }}
            />
          </Field>
        </FieldGroup>
        {ingredientMeasurements.map(({ unit, quantity, ingredient }, index) => {
          return (
            <FieldGroup className="ml-4 bg-gray-100 shadow-sm rounded-lg p-4">
              <Flex className="justify-between">
                <Label>Ingredient {index + 1}</Label>
                {ingredientMeasurements.length > 1 && (
                  <Button
                    variant={Variant.SECONDARY}
                    onClick={() => {
                      const newIngredientMeasurements = ingredientMeasurements.filter((item, idx) => index !== idx)
                      setIngredientMeasurements(newIngredientMeasurements)
                    }}
                  >
                    Remove
                  </Button>
                )}
              </Flex>
              <Input
                name={`ingredient-name-${index}`}
                id={`ingredient-name-${index}`}
                variant={Variant.SECONDARY}
                value={ingredient.name}
                onChange={(newQuantity) => {
                  const newIngredientMeasurements = [
                    ...ingredientMeasurements.slice(0, index),
                    {
                      ...ingredientMeasurements[index],
                      quantity: newQuantity,
                    },
                    ...ingredientMeasurements.slice(index + 1),
                  ]
                  setIngredientMeasurements(newIngredientMeasurements)
                }}
                placeholder="Enter an ingredient name"
              />
              <Input
                name={`ingredient-quantity-${index}`}
                id={`ingredient-quantity-${index}`}
                variant={Variant.SECONDARY}
                value={quantity}
                onChange={(newQuantity) => {
                  const newIngredientMeasurements = [
                    ...ingredientMeasurements.slice(0, index),
                    {
                      ...ingredientMeasurements[index],
                      quantity: newQuantity,
                    },
                    ...ingredientMeasurements.slice(index + 1),
                  ]
                  setIngredientMeasurements(newIngredientMeasurements)
                }}
                placeholder="Enter an ingredient quantity"
              />
              <Input
                name={`ingredient-unit-${index}`}
                id={`ingredient-unit-${index}`}
                variant={Variant.SECONDARY}
                value={unit}
                onChange={(newUnit) => {
                  const newIngredientMeasurements = [
                    ...ingredientMeasurements.slice(0, index),
                    {
                      ...ingredientMeasurements[index],
                      unit: newUnit,
                    },
                    ...ingredientMeasurements.slice(index + 1),
                  ]
                  setIngredientMeasurements(newIngredientMeasurements)
                }}
                placeholder="Enter an ingredient unit"
              />
            </FieldGroup>
          )
        })}
        <Flex className="justify-end gap-4">
          <Button
            onClick={() => {
              setIngredientMeasurements([
                ...ingredientMeasurements,
                {
                  ingredient: {
                    name: '',
                    description: '',
                  },
                  unit: '',
                  quantity: '',
                },
              ])
            }}
          >
            Add another ingredient
          </Button>
          <Button>Submit</Button>
        </Flex>
      </form>
    </>
  )
}
