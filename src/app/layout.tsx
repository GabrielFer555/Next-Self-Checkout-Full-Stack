import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { CartProvider } from "./[slug]/menu/contexts/cart-context";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "FSW Donalds",
  description:
    "FSW Donalds is a project developed during the Full Stack Web Development course at Kenzie Academy Brazil. The project is a simple e-commerce application that allows users to browse products, add them to a cart, and proceed to checkout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
