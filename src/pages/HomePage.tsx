import { Container, Heading } from "@chakra-ui/react";
import { BigProductCard } from "../components/BigProductCard";

export function HomePage() {

  return (
    <Container as="section" maxWidth="4xl"  my="30px">
      <Heading>This is homepage!</Heading>
      <BigProductCard
      name="Matcha Latte"
      price="$6.50"
      description="Matcha with oat milk and tapioca pearls"
      imageUrl="/images/greenboba.png"
      imageAlt=""
      backgroundUrl="/images/fancyBackground.png"
      backgroundAlt=""
      />
    </Container>
  )
}
