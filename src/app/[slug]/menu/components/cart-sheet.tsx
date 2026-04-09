import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../contexts/cart-context";
import CartProductItem from "./cart-product-item";
const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  const total = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-start text-lg font-semibold">
            Sacola
          </SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col py-5">
          <div className="flex flex-auto flex-col">
            {products.map((x) => (
              <CartProductItem key={x.id} product={x} />
            ))}
          </div>
          <Card className="mb-6">
            <CardContent className="flex justify-between p-2">
              <p className="text-sm text-muted-foreground">Total:</p>
              <p className="text-sm font-semibold">{total.toFixed(2)}</p>
            </CardContent>
          </Card>
          <Button className="w-full">Finalizar Pedido</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
