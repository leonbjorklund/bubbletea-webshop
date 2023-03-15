import { Box, SimpleGrid } from "@chakra-ui/react";
import { SmallProductCard } from "../components/SmallProductCard";

export function ProductsLayout() {
  return (
    <SimpleGrid columns={3} spacing="20px" minChildWidth="225px" mx="auto">

      <Box height="375px" maxWidth="250px">
      <SmallProductCard
        bgColor="pink"
        imageUrl="/images/pinkboba.png"
        imageAlt="Strawberry Fruit Tea"
      />
      </Box>

      <Box height="375px" maxWidth="250px">
      <SmallProductCard
      bgColor="yellowCardCircle"
      imageUrl="/images/yellowboba.png"
      imageAlt="Brown Sugar Milk Tea"
      />
      </Box>
      <Box height="375px" maxWidth="250px">
      <SmallProductCard
      bgColor="matchaBackground"
      imageUrl="/images/greenboba.png"
      imageAlt="Matcha Latte"
      />
      </Box>

      <Box height="375px" maxWidth="250px">
      <SmallProductCard
        bgColor="pink"
        imageUrl="/images/pinkboba.png"
        imageAlt="Strawberry Fruit Tea"
      />
      </Box>

      <Box height="375px" maxWidth="250px">
      <SmallProductCard
      bgColor="yellowCardCircle"
      imageUrl="/images/yellowboba.png"
      imageAlt="Brown Sugar Milk Tea"
      />
      </Box>
      <Box height="375px" maxWidth="250px">
      <SmallProductCard
      bgColor="matchaBackground"
      imageUrl="/images/greenboba.png"
      imageAlt="Matcha Latte"
      />
      </Box>

      <Box height="375px" maxWidth="250px">
      <SmallProductCard
        bgColor="pink"
        imageUrl="/images/pinkboba.png"
        imageAlt="Strawberry Fruit Tea"
      />
      </Box>

      <Box height="375px" maxWidth="250px">
      <SmallProductCard
      bgColor="yellowCardCircle"
      imageUrl="/images/yellowboba.png"
      imageAlt="Brown Sugar Milk Tea"
      />
      </Box>
      <Box height="375px" maxWidth="250px">
      <SmallProductCard
      bgColor="matchaBackground"
      imageUrl="/images/greenboba.png"
      imageAlt="Matcha Latte"
      />
      </Box>
    </SimpleGrid>
  )
}
