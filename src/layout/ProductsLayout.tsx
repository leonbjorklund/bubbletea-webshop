import { Box, Flex } from "@chakra-ui/react";
import { SmallProductCard } from "../components/SmallProductCard";

export function ProductsLayout() {
  return (
    <Flex gap={[2,2,3,4]} my={1} direction="row" wrap={"wrap"} width={["100%","100%","100%", "70%"]}>
      <Box sx={box}>
        <SmallProductCard 
          bgColor="pink"
          imageUrl="/images/pinkboba.png"
          imageAlt="Strawberry Fruit Tea"
        />
      </Box>
      <Box sx={box} >
        <SmallProductCard
          bgColor="pink"
          imageUrl="/images/pinkboba.png"
          imageAlt="Strawberry Fruit Tea"
        />
      </Box>
      <Box sx={box} >
        <SmallProductCard
          bgColor="pink"
          imageUrl="/images/pinkboba.png"
          imageAlt="Strawberry Fruit Tea"
        />
      </Box>
      <Box sx={box} >
        <SmallProductCard
          bgColor="pink"
          imageUrl="/images/pinkboba.png"
          imageAlt="Strawberry Fruit Tea"
        />
      </Box>
      <Box sx={box} >
        <SmallProductCard
          bgColor="pink"
          imageUrl="/images/pinkboba.png"
          imageAlt="Strawberry Fruit Tea"
        />
      </Box>
      <Box sx={box} >
        <SmallProductCard
          bgColor="pink"
          imageUrl="/images/pinkboba.png"
          imageAlt="Strawberry Fruit Tea"
        />
      </Box>
      <Box sx={box} >
        <SmallProductCard
          bgColor="pink"
          imageUrl="/images/pinkboba.png"
          imageAlt="Strawberry Fruit Tea"
        />
      </Box>

  </Flex>
  )
}

const box = {
  width: ["calc(100%/2.08)","calc(100%/3.13)","calc(100%/3.2)","calc(100%/3.2)"]
  
}