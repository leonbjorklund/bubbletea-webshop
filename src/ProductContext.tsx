import { createContext, PropsWithChildren, useContext, useState } from "react";
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

const storeProducts = localStorage.setItem("productlist", JSON.stringify(products))

export function ProductProvider({ children }: PropsWithChildren) {
  const [productList, setProductList] = useState<Product[]>(() => {
    const storedproductList = localStorage.getItem("productList");
    return storedproductList ? JSON.parse(storedproductList) : products;
  });

  const addProduct = (product: Product) => {
    setProductList((prevProductList) => {
      const updatedProductList = [...prevProductList, product];
      localStorage.setItem("productList", JSON.stringify(updatedProductList));
      return updatedProductList;
    });
  };

  const removeProduct = (id: string) => {
    setProductList((prevProductsList) => {
      const itemIndex = prevProductsList.findIndex(
        (product) => product.id === id
      );

      if (itemIndex === -1) {
        // Product not found
        return prevProductsList;
      }
      // Create a new array without the product to be removed
      const updatedProductsList = [
        ...prevProductsList.slice(0, itemIndex),
        ...prevProductsList.slice(itemIndex + 1)
      ];
      return updatedProductsList;
    });
  };

  const editProduct = (product: Product) => {
    // setProductList((prevProductsList) => {

    // })

  };

  return (
    <ProductContext.Provider value={{ productList, addProduct, removeProduct, editProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
