import { Container } from "@chakra-ui/react";
import { useCart } from "../CartContext";
import { BigProductCard } from "../components/BigProductCard";

export function ProductsPage() {

  const { addToCart } = useCart();

  return (
    // <Container maxWidth="4xl" my="30px">
    //   <Heading>This is product page!</Heading>
    //     {/* {products.map((product) => (
    //     <Card key={product.id} sx={cardStyle}>
    //       <p>{product.title}</p>
    //       <img
    //         src={product.image}
    //         style={{ width: '100px' }}
    //       />
    //       <p>{product.price} kr</p>
    //       <p>{product.description}</p>
    //       <p>id: {product.id}</p>
    //       <CardFooter>
    //         <Button colorScheme="blue" onClick={() => addToCart(product)}>
    //           Add to cart!
    //         </Button>
    //       </CardFooter>
    //     </Card>
    //   ))} */}
    // </Container>
    <Container maxWidth="4xl">
      <BigProductCard />
    </Container>
  )
}

const cardStyle = {
  width: '200px',
  margin: '10px',
  border: '2px solid black'
}
