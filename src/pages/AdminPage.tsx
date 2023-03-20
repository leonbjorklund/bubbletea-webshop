import { Container, Heading } from "@chakra-ui/react";
import { Products } from "../components/Products";

export function AdminPage() {
  return (
    <Container maxWidth="4xl" my="30px">
      <Heading>This is Admin page</Heading>
      <Products />
    </Container>
  )
}
