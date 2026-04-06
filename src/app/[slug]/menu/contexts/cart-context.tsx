import { Product } from "@prisma/client";
import { createContext, useState } from "react";

interface CartProduct extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  quantity: number;
}

export interface ICartContext {
  isOpen: boolean;
  addToCart: (product: CartProduct) => void;
  toggleCart: () => void;
  products: CartProduct[];
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  addToCart: () => {},
  toggleCart: () => {},
  products: [],
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<CartProduct[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const addToCart = (product: CartProduct) => {
        const productAlreadyExists = products.find((p) => p.id === product.id);
        if(productAlreadyExists) {
            setProducts(products.map((p) => p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p));
        } else {
            setProducts([...products, product]);
        }
    }

    const toggleCart = () => {
        setIsOpen(() => !isOpen);
    }

    return (
        <CartContext.Provider value={{ isOpen, addToCart, toggleCart, products }}>
            {children}
        </CartContext.Provider>

    )


}