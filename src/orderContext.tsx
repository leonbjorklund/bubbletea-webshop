
import { createContext, useContext } from "react";
import { CartItem } from "../data";
import { useCart } from "./CartContext";
import { generateUniqueId } from "./components/AdminForm";
import { Customer } from "./components/CheckoutForm";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

type Order = {
    itemList: CartItem[];
    contactInformation: Customer
    orderId: string
}

type OrderContextType = {
  orderList: Order[];
  addOrder: (order: Order) => void;
  createOrder: (customer: Customer) => Order;
  getLastOrder: (order:Order) => void;
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
    getLastOrder: () => {},
  });

export function useOrder() {
  return useContext(OrderContext);
}

type Props = {
  children: React.ReactNode;
};


export function OrderProvider({ children }: Props) {

    const { cartList,clearCart } = useCart();
    console.log(cartList)
  
    const [orderList, setOrderList] = useLocalStorageState<Order[]>([], "orderList");
  
    const createOrder = (customer: Customer) => {
      const itemList = cartList
      console.log(cartList)
      console.log(itemList)
      
      const orderId = generateUniqueId();
      console.log(orderId)
      console.log("creating order")
      const contactInformation = customer;
      const newOrder = { itemList, contactInformation, orderId };
      addOrder(newOrder); // add new order to orderList
      clearCart(cartList); // clear cart after creating order
      console.log(newOrder);
      return newOrder;
    };
  
      const addOrder = (order: Order) => {
        setOrderList((prevOrderList) => {
          const updatedOrderList = [...prevOrderList, order];
          return updatedOrderList;
        });
      };
  
      const getLastOrder = () => {
        const ordersCopy = [...orderList]; // make a copy of the orders array
        const lastOrder = ordersCopy.pop(); // remove the last item from the copied array and store it in a variable
        return { lastOrder, ordersCopy }; // return an object with both the last order and the copied array
      };
  
    return (
      <OrderContext.Provider
        value={{ orderList, createOrder, addOrder, getLastOrder }}
      >
        {children}
      </OrderContext.Provider>
    );
  }
