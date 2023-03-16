import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SmallProductCard } from "../components/SmallProductCard";

import { products } from "../../data";

export function ProductsLayout() {
  console.log(products);
  return (
    <Flex
      gap={[2, 2, 3, 4]}
      my={1}
      direction="row"
      wrap={"wrap"}
      width={["100%", "100%", "100%", "70%"]}
    >
      {products.map((product) => (
        <Box sx={box} key={product.id}>
          <Link key={product.id} to={`/product/${product.id}`}>
          <SmallProductCard product={product} />
          </Link>
        </Box>
      ))}
    </Flex>
  );
}

const box = {
  width: [
    "calc(100%/2.08)",
    "calc(100%/3.13)",
    "calc(100%/3.2)",
    "calc(100%/3.2)",
  ],
};
