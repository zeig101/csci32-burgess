import { Prisma, PrismaClient } from '@prisma/client'
import { FastifyBaseLogger } from 'fastify'

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export const DEFAULT_TAKE = 15
export const DEFAULT_SKIP = 0

interface RecipeServiceProps {
  logger: FastifyBaseLogger
  prisma: PrismaClient
}

interface FindOneRecipeProps {}

interface FindManyRecipeProps {
  name?: string
  sortColumn?: string
  sortOrder?: SortOrder
  take?: number
  skip?: number
}

interface CreateIngredientMeasurementProps {
  ingredient_id?: string
  ingredient_name?: string
  ingredient_description?: string
  unit: string
  quantity: number
}

interface UpdateOneRecipeProps {}

interface CreateOneRecipeProps {
  name: string
  description: string
  ingredient_measurements: CreateIngredientMeasurementProps[]
}

interface GetRecipeOrderByProps {
  sortColumn: string
  sortOrder: SortOrder
}

export class RecipeService {
  logger: FastifyBaseLogger
  prisma: PrismaClient

  constructor({ logger, prisma }: RecipeServiceProps) {
    this.logger = logger
    this.prisma = prisma
  }

  getRecipeOrderBy({ sortOrder, sortColumn }: GetRecipeOrderByProps): Prisma.RecipeOrderByWithRelationInput {
    return {
      [sortColumn]: sortOrder,
    }
  }

  async findOneRecipe({}: FindOneRecipeProps) {}

  async updateOneRecipe(props: UpdateOneRecipeProps) {}

  async findManyRecipes(props: FindManyRecipeProps) {
    this.logger.info({ props }, 'findManyRecipes')
    const { name, sortColumn = 'name', sortOrder = SortOrder.ASC, take = DEFAULT_TAKE, skip = DEFAULT_SKIP } = props
    const orderBy = this.getRecipeOrderBy({ sortColumn, sortOrder })
    //get recipes
    return this.prisma.recipe.findMany({
      where: {
        name,
      },
      orderBy: {
        name: SortOrder.ASC,
      },
      take,
      skip,
      include: {
        ingredient_measurements: {
          include: {
            ingredient: true,
          },
        },
      },
    })
  }

  async createOneRecipe(props: CreateOneRecipeProps) {
    this.logger.info('TEST TEST')
    const { name, description, ingredient_measurements } = props
    const spoof_user_id = 'cm28c93dm0000pkypqc7mmpi5'
    const recipe = await this.prisma.recipe.create({
      data: {
        user: {
          connect: {
            user_id: spoof_user_id,
          },
        },
        name,
        description,
        ingredient_measurements: {
          create: ingredient_measurements.map(
            ({ ingredient_id, ingredient_name, ingredient_description, unit, quantity }) => ({
              ingredient: ingredient_id
                ? {
                    connect: {
                      ingredient_id,
                    },
                  }
                : {
                    create: {
                      name: ingredient_name,
                      description: ingredient_description,
                    },
                  },
              quantity,
              unit,
            }),
          ),
        },
      },
    })
    return recipe
  }
}
