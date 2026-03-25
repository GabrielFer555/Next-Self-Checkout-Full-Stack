import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import WelcomeCard from "./components/card";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;

  const restaurant = await getRestaurantBySlug(slug);

  if (restaurant === null) {
    return notFound();
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="text-2xl font-semibold">{restaurant.name}</h2>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <h2 className="text-3xl font-semibold">Seja bem vindo!</h2>
        <p className="mt-4 text-center text-sm opacity-55">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit
          illum veritatis voluptates cum, tempore porro officiis nemo delectus,
          quibusdam tenetur optio dolorem at! Fuga, ad! Molestiae numquam
          aperiam molestias.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <WelcomeCard
          imageUrl="/dine_in.png"
          alt="dine in"
          buttonText="Para comer aqui"
          option="DINE_IN"
        />
        <WelcomeCard
          imageUrl="/takeaway.png"
          alt="takeaway"
          buttonText="Para levar"
          option="TAKEAWAY"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
