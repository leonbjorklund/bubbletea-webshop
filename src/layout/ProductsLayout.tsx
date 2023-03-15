import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export function ProductsLayout() {
  return (
    <SimpleGrid columns={3} spacing="10px" minChildWidth="200px">
      <Box bg="black" height="350px" border="1px solid red">
        <Text color={{base: 'white', md: "red", lg: "green"}}>hello</Text>
      </Box>
      <Box bg="black" height="350px" border="1px solid red"></Box>
      <Box bg="black" height="350px" border="1px solid red"></Box>

      <Box bg="black" height="350px" border="1px solid red"></Box>
      <Box bg="black" height="350px" border="1px solid red"></Box>
      <Box bg="black" height="350px" border="1px solid red"></Box>

      <Box bg="black" height="350px" border="1px solid red"></Box>
      <Box bg="black" height="350px" border="1px solid red"></Box>
      <Box bg="black" height="350px" border="1px solid red"></Box>

    </SimpleGrid>
  )
}
