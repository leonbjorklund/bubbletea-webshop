import { Container, Grid, GridItem, Heading, useMediaQuery } from "@chakra-ui/react";
import { useCart } from "../CartContext";
import { CartCard } from "../components/CartCard";
import { ProductsLayout } from "../layout/ProductsLayout";

export function ProductsPage() {

  const { addToCart } = useCart();
  const [isSmallerThan1042] = useMediaQuery('(max-width: 1156px)');


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

    <Container maxWidth="container.xl" my="30px">
      <Heading>This is product page!</Heading>
      <Grid
      mx="auto"
      maxW="container.xl"
      templateColumns="3fr 1fr"
      my="30px"
      columnGap="20px"
      px={isSmallerThan1042 ? "20px" : "20px"} // set px to 35px when screen width is less than 1042px, otherwise set it to 20px
      >
        <GridItem>
          <ProductsLayout />
        </GridItem>

        <GridItem as="aside">
          <CartCard />
        </GridItem>

      </Grid>
    </Container>
  );
}

