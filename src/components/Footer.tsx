import { Container, HStack } from "@chakra-ui/react";
import theme from "../DefaultThemes";
import ToggleColorMode from "./toggleButton";

export function Footer() {
  return (
    <Container as="footer" sx={footerStyle}>
      <HStack spacing="1rem">
          <ToggleColorMode />
          <ToggleColorMode />
          <ToggleColorMode />
          <ToggleColorMode />
      </HStack>
    </Container>
  );
}

const footerStyle = {
  backgroundColor: theme.colors.chocolateBrown,
  maxWidth: "70rem",
  height:"30rem",
};
