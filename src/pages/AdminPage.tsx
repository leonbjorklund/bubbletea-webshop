import { Box, Container, Heading } from "@chakra-ui/react";
import { AdminProducts } from "../components/AdminProducts";

export function AdminPage() {
  return (
    <Box bg={"pink"}>
      <Container as="section" maxWidth="container.xl" my="">
        <Heading>Admin</Heading>
      </Container>
      <AdminProducts />
    </Box>
  );
}
