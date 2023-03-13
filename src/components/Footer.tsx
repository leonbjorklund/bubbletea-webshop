import { Container, HStack } from "@chakra-ui/react";
import theme from "../DefaultThemes";

export function Footer() {
  return (
    <Container as="footer" sx={footerStyle}>
      <HStack spacing="1rem">
      </HStack>
    </Container>
  );
}

const footerStyle = {
  backgroundColor:theme.colors.strawberryTeaCircle,
  maxWidth: "70rem",
  height: "30rem",
};