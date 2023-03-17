import { useToast } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import { CartItem, Product } from "../data";

type CartContextType = {
  cartList: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
};

const CartContext = createContext<CartContextType>({
  cartList: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export function useCart() {
  return useContext(CartContext);
}

type Props = {
  children: React.ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cartList, setCartList] = useState<CartItem[]>(() => {
    const storedCartList = localStorage.getItem("cartList");
    return storedCartList ? JSON.parse(storedCartList) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  const toast = useToast();
  const toastId = 'addToCartToast';

  const addToCart = (item: Product) => {
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
        if(!toast.isActive(toastId)){
          toast({
          id: toastId,
          title: "Added to cart!",
          description: "Go to cart to complete your order",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }

        return [...prevCartList, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartList((prevCartList) => {
      const itemIndex = prevCartList.findIndex(
        (cartItem) => cartItem.id === itemId
      );
      if (itemIndex >= 0) {
        if (prevCartList[itemIndex].quantity > 1) {
          const updatedCartList = [...prevCartList];
          updatedCartList[itemIndex] = {
            ...updatedCartList[itemIndex],
            quantity: updatedCartList[itemIndex].quantity - 1,
          };
          return updatedCartList;
        } else {
          return prevCartList.filter((cartItem) => cartItem.id !== itemId);
        }
      } else {
        return prevCartList;
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
