import { notFound } from "next/navigation";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const validConsumptionMethods = ["DINE_IN", "TAKEAWAY"];

const isConsumptionMethodValid = (queryValue: string): boolean =>
  validConsumptionMethods.includes(queryValue);

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;

  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  return <h1>{slug}</h1>;
};

export default RestaurantMenuPage;
