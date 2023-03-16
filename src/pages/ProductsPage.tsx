import { Box, Container, Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useCart } from "../CartContext";
import { CartCard } from "../components/CartCard";
import { ProductsLayout } from "../layout/ProductsLayout";

export function ProductsPage() {

  const { addToCart } = useCart();


  return (
    //   {products.map((product) => (
    //     <Card key={product.id} sx={cardStyle}>
    //       <p>{product.title}</p>
    //       <img src={product.image} style={{ width: "100px" }} />
    //       <p>{product.price} kr</p>
    //       <p>{product.description}</p>
    //       <p>id: {product.id}</p>
    //       <CardFooter>
    //         <Button colorScheme="blue" onClick={() => addToCart(product)}>
    //           Add to cart!
    //         </Button>
    //       </CardFooter>
    //     </Card>
    //   ))}

    <Container maxWidth="container.xl" my=".3rem">
      <Tabs variant="unstyled" bg={"white"} my={5} width={["100%","100%","98%", "68.5%"]}>
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
        <Box as="aside">
          <CartCard />
        </Box>
      </Flex>
    </Container>
  );
}

