import { useToast } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../data";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextData {
  cartList: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartList, setCartList] = useState<CartItem[]>([]);
  const toast = useToast();
  const [toastId, setToastId] = useState<string | number>(0);

  const addToCart = (item: Product) => {
    if (toast.isActive(toastId)) {
      toast.close(toastId);
    }

    const newToastId = `addToCartToast-${Date.now()}`;

    toast({
      id: newToastId,
      title: "Added to cart!",
      description: "Go to cart to complete your order",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    setToastId(newToastId);

    setCartList((prevCartList) => {
      const existingCartItem = prevCartList.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItem) {
        return prevCartList.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCartList, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartList((prevCartList) => {
      const existingCartItem = prevCartList.find((cartItem) => cartItem.id === id);

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

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
