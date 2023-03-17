import { Toast } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../data";

interface CartContextValue {
  cartList: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartList, setCartList] = useState<Product[]>([]);
  const [toastId, setToastId] = useState<string | null>(null);

  useEffect(() => {
    if (toastId) {
      Toast({
        id: toastId,
        title: "Added to cart!",
        description: "Go to cart to complete your order",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [toastId]);

  const addToCart = (item: Product) => {
    setCartList((prevCartList) => {
      const existingCartItem = prevCartList.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItem) {
        const updatedCartList = prevCartList.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );

        setToastId(`addToCartToast-${Date.now()}`);
        return updatedCartList;
      } else {
        setToastId(`addToCartToast-${Date.now()}`);
        return [...prevCartList, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartList((prevCartList) => {
      const existingCartItem = prevCartList.find(
        (cartItem) => cartItem.id === id
      );

      if (existingCartItem && existingCartItem.quantity > 1) {
        return prevCartList.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevCartList.filter((cartItem) => cartItem.id !== id);
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
