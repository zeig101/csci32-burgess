import { IngredientMeasurement } from '@/context/RecipeContext'
import { Flex } from '@radix-ui/themes'
import { Button } from '@repo/ui/button'
import { Header } from '@repo/ui/header'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'

export type RecipeCardProps = {
  recipe_id: string
  name: string | null
  description: string | null
  ingredient_measurements: IngredientMeasurement[] | null
}

export default function RecipeCard({ name, description, ingredient_measurements }: RecipeCardProps) {
  return (
    <div className="border-4 border-solid border-emerald-600 rounded-md bg-slate-200 shadow-md basis-1/4 min-w-96 flex-grow mt-2">
      <Flex className="justify-between bg-slate-400 w-full p-4 gap-2 flex flex-wrap rounded-md">
        <Header variant="h2">{name}</Header>
        <Flex className="gap-2 flex">
          <Button size={Size.XSMALL} variant={Variant.SECONDARY} onClick={() => alert('Update not implemented')}>
            Update
          </Button>
          <Button size={Size.XSMALL} variant={Variant.SECONDARY} onClick={() => alert('Delete not implemented')}>
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
