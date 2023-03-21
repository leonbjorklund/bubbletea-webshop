import { Box, Container, Heading } from "@chakra-ui/react";
import { AdminProducts } from "../components/AdminProducts";

export function AdminPage() {
  return (
    <Box>
      <Container as="section" maxWidth="container.xl" my="">
        <Heading>This is ADMINPAGE :D!</Heading>
      </Container>
      <AdminProducts />
    </Box>
  )
}
