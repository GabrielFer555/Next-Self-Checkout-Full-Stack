import { Restaurant } from "@prisma/client";

import { db as prisma } from "@/lib/prisma";

export const getRestaurantBySlug = async (
  slug: string,
): Promise<Restaurant | null> => {
  return await prisma.restaurant.findUnique({
    where: {
      slug: slug,
    },
  });
};
