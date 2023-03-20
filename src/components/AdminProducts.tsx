import { Box, Container, Flex } from "@chakra-ui/react";
import { CartCard } from "./CartCard";
import { ProductsLayout } from "./ProductsLayout";

export function AdminProducts() {

  return (
    <Container maxWidth="container.xl" my=".3rem">
      <Flex
        direction={["column-reverse", "column-reverse", "column-reverse", "row"]}
        justify={["center", "center", "center", "space-between"]}
        gap={1}
      >
        <ProductsLayout />
        <Box as="aside" width={["100%", "100%", "96%", "40%"]}>
          <CartCard />
        </Box>
      </Flex>
    </Container>
  );
}
