import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface MenuProductsProps {
  products: Product[];
  slug: string;
  consumptionMethod: string;
}

const MenuProducts = ({
  products,
  slug,
  consumptionMethod,
}: MenuProductsProps) => {
  return (
    <div className="space-y-3 p-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/${slug}/menu/${product.id}?consumptionMethod=${consumptionMethod}`}
          className="flex items-center justify-between gap-10 border-b py-3"
        >
          <div className="flex flex-col">
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.ingredients.length == 0
                ? product.name
                : product.ingredients.join(", ")}
            </p>
            <p className="pt-3 text-sm font-bold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
          </div>
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuProducts;
