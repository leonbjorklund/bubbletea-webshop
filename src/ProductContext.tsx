import { createContext, useContext, useState } from "react";
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

  const addProduct = (item: Product) => {


  };

  const removeFromproduct = (itemId: string) => {

    };
  const editProduct = (itemId: string) => {

  };

  return (
    <productContext.Provider value = {{productList, addProduct, removeProduct }}>
      {children}
    </productContext.Provider>
  );
}
