import { Box, Container, Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import { products } from "../../data";
import { useCart } from "../CartContext";
import { BigProductCard } from "../components/BigProductCard";
import { CartCard } from "../components/CartCard";
import { ProductsLayout } from "../layout/ProductsLayout";

export function ProductsPage() {

  const { addToCart } = useCart();


  return (
    <Container maxWidth="container.xl" my=".3rem">
      <Tabs borderRadius=".6rem" variant="unstyled" bg={"white"} my={5} width={["100%","100%","98%", "63.5%"]}>
        <TabList>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>ALL TEAS</Tab>
          <Tab _selected={{ color: "white", bg: "red.400" }}>FRUIT TEA</Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>MILK TEA</Tab>
        </TabList>
      </Tabs>
      <Flex
        direction={["column", "column", "column", "row"]}
        justify={["center", "center", "center", "space-between"]}
        gap={1}
      >
        <ProductsLayout />
        <Box as="aside"  width={["100%", "100%","100%","40%",]}>
          <CartCard />
        </Box>
      </Flex>
           <BigProductCard 
      product={products[0]}
      backgroundAlt="boba"
      backgroundUrl="/images/fancyBackground.png"
      />
    </Container>
  );
}

