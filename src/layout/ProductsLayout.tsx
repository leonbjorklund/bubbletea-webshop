import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export function ProductsLayout() {
  return (
    <SimpleGrid columns={3} spacing="10px" minChildWidth="225px" mx="auto">
      <Box bg="black" height="375px" maxWidth="250px" border="1px solid red">
        <Text color={{base: 'white', md: "red", lg: "green"}}>hello</Text>
      </Box>
      <Box bg="black" height="375px" maxWidth="250px" border="1px solid red"></Box>
      <Box bg="black" height="375px" maxWidth="250px" border="1px solid red"></Box>
      <Box bg="black" height="375px" maxWidth="250px" border="1px solid red"></Box>

      <Box bg="black" height="375px" maxWidth="250px" border="1px solid red"></Box>
      <Box bg="black" height="375px" maxWidth="250px" border="1px solid red"></Box>
      <Box bg="black" height="375px" maxWidth="250px" border="1px solid red"></Box>

      <Box bg="black" height="375px" maxWidth="250px" border="1px solid red"></Box>
      <Box bg="black" height="375px" maxWidth="250px" border="1px solid red"></Box>
      <Box bg="black" height="375px" maxWidth="250px" border="1px solid red"></Box>

    </SimpleGrid>
  )
}
