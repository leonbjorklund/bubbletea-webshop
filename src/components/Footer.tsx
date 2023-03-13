import { Container, Heading } from "@chakra-ui/react";
import theme from "../DefaultThemes";

export function Footer() {
  return (
    <Container
      as="footer"
      bg={theme.colors.strawberryTeaCircle}
      minWidth="100%"
      position="absolute"
      height="20rem"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h2" size="md" textAlign="center" bg= {theme.colors.bigMatchaCard} borderRadius= {theme.borderRadius.border1}>
        I'm the footer!
      </Heading>
    </Container>
  );
}