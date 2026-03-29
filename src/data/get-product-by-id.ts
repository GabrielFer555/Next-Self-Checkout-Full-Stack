import { Prisma } from "@prisma/client";

import { db as prisma } from "@/lib/prisma";

export const getProductWithCategoriesById = async (
  id: string,
): Promise<Prisma.ProductGetPayload<{
  include: { menuCategory: true };
}> | null> => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      menuCategory: true,
    },
  });

  return product;
};
