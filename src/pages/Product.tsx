import { Container, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";

export function ProductPage() {
  const { addToCart } = useCart();
  const params = useParams();
  console.log(params.id);

  const product = "????";

  if (!product) {
    return <p>Produkten hittades inte...</p>
  }

  return (
    <Container
      maxWidth={["100%", "90rem"]}
      minHeight={["92svh", "92vh", "fit-content"]}
      bg="tomato"
      mb={"1rem"}
      p={"1rem"}
    >
      <Heading h={["5vh", "5vh", "3rem"]} mb={"1vh"} bg="blue">
        This is product details page!
      </Heading>
    </Container>
  );
}