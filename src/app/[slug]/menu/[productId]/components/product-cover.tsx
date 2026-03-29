"use client";
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import MenuButton from "../../components/menu-button";

interface ProductCoverProps {
  product: Product;
}
const ProductCover = ({ product }: ProductCoverProps) => {
  const router = useRouter();

  const handleBackClick = () => router.back();

  return (
    <div className="relative h-[300px] min-w-full">
      <MenuButton
        onAction={handleBackClick}
        style="absolute right-4 top-3 z-10 rounded-full"
      >
        <ScrollTextIcon />
      </MenuButton>
      <MenuButton
        onAction={handleBackClick}
        style="absolute left-4 top-3 z-10 rounded-full"
      >
        <ChevronLeftIcon />
      </MenuButton>
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default ProductCover;
