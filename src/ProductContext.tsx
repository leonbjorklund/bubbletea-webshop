import { createContext, useContext, useState, PropsWithChildren } from "react";
import { Product, products } from "../data";

type ProductContextType = {
  productList: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  editProduct: (product: Product) => void;
};

const ProductContext = createContext<ProductContextType>(null as any);

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }: PropsWithChildren) {
  const [productList, setproductList] = useState<Product[]>(() => {
    const storedproductList = localStorage.getItem("productList");
    return storedproductList ? JSON.parse(storedproductList) : products;
  });

  const addProduct = (product: Product) => {};
  const removeProduct = (id: string) => {};
  const editProduct = (product: Product) => {};

  return (
    <ProductContext.Provider value={{ productList, addProduct, removeProduct, editProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
