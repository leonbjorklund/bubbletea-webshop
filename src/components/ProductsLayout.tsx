import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { products } from "../../data";
import { useProduct } from "../ProductContext";
import { SmallProductCard } from "./SmallProductCard";


interface ProductsLayoutProps {
  filterCategory: "fruit" | "milk" | null;
}

export function ProductsLayout({ filterCategory }:ProductsLayoutProps) {
  const { productList } = useProduct()
  const filteredProductList = filterCategory
    ? productList.filter((product) => product.category === filterCategory)
    : products;

  return (
    <Flex
      gap={[2, 2, 3, 4]}
      my={1}
      direction="row"
      wrap={"wrap"}
      width={["100%", "100%", "100%", "70%"]}
    >
      {filteredProductList.map((product) => (
        <Box sx={boxStyle} key={product.id}>
          <Link key={product.id} to={`/product/${product.id}`}>
          <SmallProductCard product={product} />
          </Link>
        </Box>
      ))}
    </Flex>
  );
}

const boxStyle = {
  width: [
    "calc(100%/2.08)",
    "calc(100%/3.13)",
    "calc(100%/3.2)",
    "calc(100%/3.2)",
  ],
};
