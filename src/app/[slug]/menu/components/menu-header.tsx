"use client";

import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MenuCategoryWithProducts } from "@/types/types";

import MenuProducts from "./menu-products";

interface MenuHeaderProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      menuCategories: {
        include: {
          products: true;
        };
      };
    };
  }>;
  slug: string;
  consumptionMethod: string;
}

const MenuHeader = ({
  restaurant,
  slug,
  consumptionMethod,
}: MenuHeaderProps) => {
  const categories = restaurant.menuCategories;
  const [categorySelected, setCategorySelected] =
    useState<MenuCategoryWithProducts>(categories[0]);

  const handleCategorySelect = (category: MenuCategoryWithProducts) => {
    setCategorySelected(category);
  };

  const getButtonTypeCategory = (category: MenuCategoryWithProducts) =>
    categorySelected.id === category.id ? "default" : "secondary";

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border bg-white">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <Image
            src={restaurant.avatarImageUrl}
            alt={restaurant.name}
            width={45}
            height={45}
          />
          <div>
            <h2 className="text-lg font-semibold">{restaurant.name}</h2>
            <p className="text-xs opacity-55">{restaurant.description}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-green-500">
          <ClockIcon size={12} />
          <p>Aberto</p>
        </div>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 p-4 pt-0">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={getButtonTypeCategory(category)}
              size="sm"
              className="rounded-full"
              onClick={() => handleCategorySelect(category)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h3 className="px-3 pt-2 text-lg font-semibold">
        {categorySelected.name}
      </h3>
      <MenuProducts
        products={categorySelected.products}
        slug={slug}
        consumptionMethod={consumptionMethod}
      />
    </div>
  );
};

export default MenuHeader;
