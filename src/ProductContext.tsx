import { useToast } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import { Product, products } from "../data";

type productContextType = {
  productList: Product[];
  addProduct: (item: Product) => void;
  removeProduct: (itemId: string) => void;
  editProduct: (itemId: string) => void;
};

const productContext = createContext<productContextType>({
  productList: products,
  addProduct: () => {},
  removeProduct: () => {},
  editProduct: () => {},
});

export function useProduct() {
  return useContext(productContext);
}

type Props = {
  children: React.ReactNode;
};

export function productProvider({ children }: Props) {
    const [productList, setproductList] = useState<Product[]>(() => {
    const storedproductList = localStorage.getItem("productList");
    return storedproductList ? JSON.parse(storedproductList) : [];
  });

  const [totalItems, setTotalItems] = useState(() => calculateTotalItems(productList));

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
    setTotalItems(calculateTotalItems(productList));
  }, [productList]);

  const toast = useToast();

  const addToproduct = (item: Product) => {
    const existingproductItem = productList.find(
      (productItem) => productItem.id === item.id
    );

    if (existingproductItem) {
      setproductList((prevproductList) =>
        prevproductList.map((productItem) =>
          productItem.id === item.id
            ? { ...productItem, quantity: productItem.quantity + 1 }
            : productItem
        )
      );
      toast({
        title: "Increased item quantity!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else {
      setproductList([...productList, { ...item, quantity: 1 }]);
      toast({
        title: "Added to product!",
        description: "Go to product to complete your order",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const removeFromproduct = (itemId: string) => {
    setproductList((prevproductList) => {
      const itemIndex = prevproductList.findIndex(
        (productItem) => productItem.id === itemId
      );
      if (itemIndex >= 0) {
        if (prevproductList[itemIndex].quantity > 1) {
          const updatedproductList = [...prevproductList];
          updatedproductList[itemIndex] = {
            ...updatedproductList[itemIndex],
            quantity: updatedproductList[itemIndex].quantity - 1,
          };
          return updatedproductList;
        } else {
          return prevproductList.filter((productItem) => productItem.id !== itemId);
        }
      } else {
        return prevproductList;
      }
    });
  };

  return (
    <productContext.Provider value={{ productList, addProduct, removeProduct, totalItems }}>
      {children}
    </productContext.Provider>
  );
}
