import { Container, Heading } from "@chakra-ui/react";

export function Footer() {
  return (
    <Container as="footer"
      bg="pink"
      minWidth="100%"
      position="absolute"
      height="50px"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
        <Heading as="h2" size="md" textAlign="center">I'm the footer!</Heading>
    </Container>
  )
}







