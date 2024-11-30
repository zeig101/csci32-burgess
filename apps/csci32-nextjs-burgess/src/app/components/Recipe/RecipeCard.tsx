import { IngredientMeasurement, RecipeContext } from '@/context/RecipeContext'
import { deleteRecipe, getRecipe } from '@/hooks/useRecipes'
import { Flex } from '@radix-ui/themes'
import { Button } from '@repo/ui/button'
import { Header } from '@repo/ui/header'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'
import { useContext } from 'react'

export type RecipeCardProps = {
  recipe_id: string
  name: string | null
  description: string | null
  ingredient_measurements: IngredientMeasurement[] | null
}

export default function RecipeCard({ name, description, ingredient_measurements, recipe_id }: RecipeCardProps) {
  const { mutate, setShowRecipeForm, setRecipeId, setRecipe } = useContext(RecipeContext)
  return (
    <div className="border-4 border-solid border-emerald-600 rounded-md bg-slate-200 shadow-md basis-1/4 min-w-96 flex-grow mt-2">
      <Flex className="justify-between bg-slate-400 w-full p-4 gap-2 flex flex-wrap rounded-md">
        <Header variant="h2">{name}</Header>
        <Flex className="gap-2 flex">
          <Button
            variant={Variant.SECONDARY}
            size={Size.XSMALL}
            onClick={async () => {
              const newRecipe = await getRecipe(recipe_id)
              setRecipeId(recipe_id)
              setRecipe(newRecipe)
              setShowRecipeForm(true)
            }}
          >
            Update
          </Button>
          <Button
            variant={Variant.SECONDARY}
            size={Size.XSMALL}
            onClick={async () => {
              await deleteRecipe(recipe_id)
              mutate()
              alert(`Recipe ${name} deleted`)
            }}
          >
            Delete
          </Button>
        </Flex>
      </Flex>
      <div className="bg-slate-300 w-full p-4 flex flex-col gap-4 rounded-md">
        <p>{description}</p>
        <ul className="ml-2 bg-slate-200 p-4 gap-2 flex flex-col rounded-md">
          {ingredient_measurements?.map(({ quantity, unit, ingredient }, index) => {
            return (
              <li key={index}>
                {quantity} {unit} {ingredient.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
