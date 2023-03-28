
import { createContext, useContext, useState } from "react";
import { CartItem } from "../data";
import { useCart } from "./CartContext";
import { generateUniqueId } from "./components/AdminForm";
import { Customer } from "./components/CheckoutForm";

type Order = {
    itemList: CartItem[];
    contactInformation: Customer
    orderId: string
}

type OrderContextType = {
  orderList: Order[];
  addOrder: (order: Order) => void;
  createOrder: (customer: Customer) => Order;
  displayLatestOrder: (order:Order) => void;
};

const OrderContext = createContext<OrderContextType>({
    orderList: [],
    createOrder: () => ({
      itemList: [],
      contactInformation: {
        name: "",
        email: "",
        phone: "",
        street: "",
        zipCode: "",
        city: "",
      },
      orderId: "",
    }),
    addOrder: () => {},
    displayLatestOrder: () => {},
  });

export function useOrder() {
  return useContext(OrderContext);
}

type Props = {
  children: React.ReactNode;
};


export function OrderProvider({ children }: Props) {
    const { cartList, clearCart } = useCart();
  
    const [orderList, setOrderList] = useState<Order[]>(() => {
      const storedOrderList = localStorage.getItem("orderList");
      return storedOrderList ? JSON.parse(storedOrderList) : [];
    });
  
    const createOrder = (customer:Customer) => {
        const itemList = cartList;
        const orderId = generateUniqueId();
        const contactInformation = customer;
        const newOrder = { itemList, contactInformation, orderId };
        console.log(newOrder)
        return newOrder;
      }
  
    const addOrder = (order: Order) => {
      setOrderList((prevOrderList) => {
        const updatedOrderList = [...prevOrderList, order];
        localStorage.setItem("orderList", JSON.stringify(updatedOrderList));
        return updatedOrderList;
      });
    };
  
    const displayLatestOrder = (order: Order) => {
      // TODO: Implement function to display latest order
    };
  
    return (
      <OrderContext.Provider
        value={{ orderList, createOrder, addOrder, displayLatestOrder }}
      >
        {children}
      </OrderContext.Provider>
    );
  }
