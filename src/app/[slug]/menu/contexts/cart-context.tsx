"use client";

import { Product } from "@prisma/client";
import { createContext, useState } from "react";

export interface CartProduct extends Product {
  quantity: number;
}

export interface ICartContext {
  isOpen: boolean;
  addToCart: (product: CartProduct) => void;
  toggleCart: () => void;
  updateProductQuantity: (productId: string, quantity: number) => void;
  deleteProduct: (productId: string) => void;
  products: CartProduct[];
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  addToCart: () => {},
  toggleCart: () => {},
  updateProductQuantity: () => {},
  deleteProduct: () => {},
  products: [],
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const updateProductQuantity = (productId: string, quantity: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity } : product,
      ),
    );
  };

  const deleteProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId),
    );
  };

  const addToCart = (product: CartProduct) => {
    const productAlreadyExists = products.find((p) => p.id === product.id);
    if (productAlreadyExists) {
      setProducts(
        products.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p,
        ),
      );
    } else {
      setProducts([...products, product]);
    }
  };

  const toggleCart = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        addToCart,
        toggleCart,
        products,
        updateProductQuantity,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
