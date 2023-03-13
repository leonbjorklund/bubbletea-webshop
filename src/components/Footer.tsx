import { Center, Container, HStack } from "@chakra-ui/react";
import theme from "../DefaultThemes";
import ToggleColorMode from "./toggleButton";

export function Footer() {
  return (
    <Container as="footer" sx={footerStyle}>
      <HStack>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <ToggleColorMode />
        </Center>
      </HStack>
    </Container>
  );
}

const footerStyle = {
  backgroundColor: theme.colors.chocolateBrown,
  maxWidth: "70rem",
  height:"30rem",
};
