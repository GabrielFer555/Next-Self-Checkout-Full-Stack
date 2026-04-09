"use client";

import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import formatCurrency from "@/helper/format-currency";

import { CartContext, CartProduct } from "../contexts/cart-context";

interface CartProductItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartProductItemProps) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const { updateProductQuantity, deleteProduct } = useContext(CartContext);

  const handleDecreaseQuantity = () =>
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    updateProductQuantity(product.id, quantity + 1);
  };

  const handleDeleteProduct = () => {
    deleteProduct(product.id);
  };

  return (
    <div className="flex flex-row items-center">
      <div className="relative h-20 w-20">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="ml-3">
        <p className="line-clamp-1 text-sm font-medium">{product.name}</p>
        <span className="font-semibold">
          {formatCurrency(product.price * quantity)}
        </span>
        <div className="flex items-center gap-1 text-center">
          <Button
            onClick={handleDecreaseQuantity}
            className="h-7 w-7 rounded-xl"
            variant={"outline"}
          >
            <ChevronLeftIcon />
          </Button>
          <p className="w-7">{quantity}</p>
          <Button
            onClick={handleIncreaseQuantity}
            className="h-7 w-7 rounded-xl"
            variant="destructive"
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <Button onClick={handleDeleteProduct}>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default CartProductItem;
