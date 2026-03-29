import { notFound } from "next/navigation";

import { getProductWithCategoriesById } from "@/data/get-product-by-id";
import { isConsumptionMethodValid } from "@/helper/validate-consumption-method";

import ProductCover from "./components/product-cover";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const ProductPage = async ({ params, searchParams }: ProductPageProps) => {
  const { productId } = await params;
  const { consumptionMethod } = await searchParams;

  const product = await getProductWithCategoriesById(productId);
  if (!isConsumptionMethodValid(consumptionMethod) || product == null) {
    return notFound();
  }

  return (
    <>
      <ProductCover product={product} />
    </>
  );
};

export default ProductPage;
