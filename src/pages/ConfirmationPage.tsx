import { Button, Container, Flex, SystemStyleObject } from "@chakra-ui/react";
import { OrderConfirmationCard } from "../components/OrderConfirmationCard";

export function ConfirmationPage() {
  return (
    <Container sx={checkoutContainer} maxW="container.md">
      <OrderConfirmationCard />
      <Flex>
        <Button
          loadingText="Submitting"
          sx={submitButtonStyle}
          type="submit"
          variant="outline"
          colorScheme="teal"
        >
          Place another order
        </Button>
      </Flex>
    </Container>
  );
}

const checkoutContainer: SystemStyleObject = {
  my: "2rem",
  borderRadius: "0.625rem",
  py: "1rem",
  bg: "lightYellow",
};

const submitButtonStyle: SystemStyleObject = {
  marginTop: "2rem",
  marginBottom: "1rem",
  width: "14rem",
  height: "4rem",
  mx: "auto",
  bg: "lightGreenButton",
  color: "black",
  border: "none",
};
