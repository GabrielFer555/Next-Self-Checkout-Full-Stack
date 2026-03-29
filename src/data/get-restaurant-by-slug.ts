import { Prisma } from "@prisma/client";

import { db as prisma } from "@/lib/prisma";

export const getRestaurantBySlug = async (
  slug: string,
): Promise<Prisma.RestaurantGetPayload<{
  include: { menuCategories: { include: { products: true } } };
}> | null> => {
  return await prisma.restaurant.findUnique({
    where: {
      slug: slug,
    },
    include: {
      menuCategories: {
        include: {
          products: true,
        },
      },
    },
  });
};
