import { Box, Flex } from "@chakra-ui/react";
import { AdminSmallProductCard } from "./AdminSmallProductCard";

import { products } from "../../data";

export function AdminProductsLayout() {
  return (
    <Flex
      gap={[2, 2, 3, 4]}
      my={1}
      direction="row"
      wrap={"wrap"}
      width={["100%", "100%", "100%", "70%"]}
    >
      {products.map((product) => (
        <Box sx={boxStyle} key={product.id}>
          <AdminSmallProductCard image="" imageAlt=""/>
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
