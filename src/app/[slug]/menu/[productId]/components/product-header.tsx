"use client";

import { Product, Restaurant } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
  product: Product;
  restaurant: Restaurant;
}

const ProductHeader = ({ product, restaurant }: ProductHeaderProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);

  const handleDecreaseQuantity = () =>
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

  return (
    <div className="relative z-50 mt-[-1.5rem] flex w-screen flex-col rounded-t-3xl bg-white py-5 px-5">
      <div className="flex items-center gap-1">
        <Image
          src={restaurant.avatarImageUrl}
          alt={product.name}
          width={16}
          height={16}
          className="rounded-full"
        />
        <span className="ml-2 text-xs font-light text-muted-foreground">
          {restaurant.name}
        </span>
      </div>
      <h1 className="text-lg font-semibold">{product.name}</h1>
      <div className="mt-3 flex w-full justify-between">
        <span className="text-lg font-bold">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </span>
        <div className="flex items-center text-center">
          <Button
            variant="outline"
            size="sm"
            className="mr-2"
            onClickCapture={handleDecreaseQuantity}
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            variant="destructive"
            size="sm"
            className="ml-2"
            onClick={handleIncreaseQuantity}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
