import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Product, products } from "../data";

type ProductContextType = {
  productList: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  editProduct: (product: Product) => void;
};


const ProductContext = createContext<ProductContextType>({
  productList: [],
  addProduct: (product: Product) => {},
  removeProduct: (id: string) => {},
  editProduct: (product: Product) => {},
});

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
      // localStorage.setItem("productList", JSON.stringify(updatedProductsList));
      return updatedProductsList;
    });
  };

  const editProduct = (editedProduct: Product) => {
    setProductList((prevProductList) => {
      const productIndex = prevProductList.findIndex(
        (product) => product.id === editedProduct.id
      );

      if (productIndex === -1) {
        // Product not found
        return prevProductList;
      }

      const updatedProductList = prevProductList.map((product, index) =>
        index === productIndex ? editedProduct : product
      );
      localStorage.setItem("productList", JSON.stringify(updatedProductList));
      return updatedProductList;
    });
  };



  return (
    <ProductContext.Provider value={{ productList, addProduct, removeProduct, editProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
