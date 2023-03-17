import { Container, Heading } from "@chakra-ui/react";
import { products } from "../../data";
import { BigProductCard } from "../components/BigProductCard";

export function HomePage() {

  return (
    <Container as="section" maxWidth="4xl"  my="30px">
      <Heading>This is homepage!</Heading>
      <BigProductCard
      product={products[0]}
      backgroundAlt="boba"
      backgroundUrl="/images/fancyBackground.png"
      />
    </Container>
  )
}
