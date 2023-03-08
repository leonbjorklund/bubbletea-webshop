import { Container, Heading } from "@chakra-ui/react";

export function HomePage() {

  return (
    <Container as="section" maxWidth="4xl">
      <Heading my="30px">This is homepage!</Heading>
    </Container>
    // <SimpleGrid columns={4} spacing={10} minChildWidth="250px" p="10px">
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>

    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>

    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    // </SimpleGrid>
  )
}
