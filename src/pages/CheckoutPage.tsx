import { Container } from "@chakra-ui/react";
import { CartCard } from "../components/CartCard";
import { CheckoutForm } from "../components/CheckoutForm";

export function CheckoutPage() {

  return (
    <Container maxWidth="container.lg" >
      <CartCard showOrderButton={false} />
      <CheckoutForm />
    </Container>
  )
}

