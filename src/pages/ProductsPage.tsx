import { Box, Container, Flex, Heading } from "@chakra-ui/react";
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

    <Container maxWidth="container.xl" my="0rem">
      <Heading>This is product page!</Heading>
      <Flex direction={["column","column","column","row"]} justify={["center","center","center","space-between"]} gap={1}>
          <ProductsLayout/>
        <Box as="aside">
          <CartCard />
        </Box>
      </Flex>
    </Container>
  );
}

