import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import MenuCover from "./components/menu-cover";
import MenuHeader from "./components/menu-header";

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

  const restaurant = await getRestaurantBySlug(slug);

  if (!isConsumptionMethodValid(consumptionMethod) || restaurant === null) {
    return notFound();
  }

  return (
    <div className="h-screen w-screen">
      <MenuCover restaurant={restaurant} />
      <MenuHeader restaurant={restaurant} />
    </div>
  );
};

export default RestaurantMenuPage;
