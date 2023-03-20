import { Box, Container, Flex, Heading, Tab, TabList, Tabs } from "@chakra-ui/react";
import { CartCard } from "./CartCard";
import { ProductsLayout } from "./ProductsLayout";

export function Products() {

  return (
    <Container maxWidth="container.xl" my=".3rem">
      <Heading>Our Drinks</Heading>
      <Tabs
        borderRadius=".6rem"
        variant="unstyled"
        bg={"white"}
        my={5}
        width={["100%", "100%", "98%", "63.5%"]}
        isFitted
      >
        <TabList>
          <Tab borderRadius=".6rem" _selected={{ color: "white", bg: "blue.500" }}>ALL TEAS</Tab>
          <Tab borderRadius=".6rem" _selected={{ color: "white", bg: "red.400" }}>FRUIT TEA</Tab>
          <Tab borderRadius=".6rem" _selected={{ color: "white", bg: "green.400" }}>MILK TEA</Tab>
        </TabList>
      </Tabs>
      <Flex
        direction={["column", "column", "column", "row"]}
        justify={["center", "center", "center", "space-between"]}
        gap={1}
      >

        <ProductsLayout />

        <Box as="aside" width={["100%", "100%", "100%", "40%"]}>
          <CartCard />
        </Box>
      </Flex>
    </Container>
  );
}
