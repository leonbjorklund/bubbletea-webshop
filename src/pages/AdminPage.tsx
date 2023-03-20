import { Box, Container, Heading } from "@chakra-ui/react";
import { Products } from "../components/Products";

export function AdminPage() {
  return (
    <Box>
      <Container as="section" maxWidth="4xl" my="">
        <Heading>This is homepage!</Heading>
      </Container>
      <Products />
    </Box>
  )
}
