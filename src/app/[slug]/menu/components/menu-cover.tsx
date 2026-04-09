"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { CartContext } from "../contexts/cart-context";
import CartSheet from "./cart-sheet";
import MenuButton from "./menu-button";

interface MenuBannerProps {
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}

const MenuBanner = ({ restaurant }: MenuBannerProps) => {
  const router = useRouter();
  const { toggleCart } = useContext(CartContext);

  const handleCartClick = () => toggleCart();

  const handleBackClick = () => router.back();

  return (
    <div>
      <div className="relative h-[250px] min-w-full">
        <MenuButton
          onAction={handleCartClick}
          style="absolute right-4 top-3 z-50 rounded-full"
        >
          <ScrollTextIcon />
        </MenuButton>
        <MenuButton
          onAction={handleBackClick}
          style="absolute left-4 top-3 z-50 rounded-full"
        >
          <ChevronLeftIcon />
        </MenuButton>
        <Image
          src={restaurant.coverImageUrl}
          className="object-cover"
          alt={restaurant.name}
          fill
        />
      </div>
      <CartSheet />
    </div>
  );
};

export default MenuBanner;
