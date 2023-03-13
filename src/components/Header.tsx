import { Container, Flex, Heading, HStack, Link as ChakraLink, Spacer, SystemStyleObject, theme } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../CartContext";

export function Header() {

  const { cartList } = useCart();

  return (
    <Container as="header" sx={containerStyle}>
      <Flex as="nav" sx={flexStyle}>
        <Heading as="h1" width="100%">Boba shop!</Heading>
        <Spacer />

        <HStack spacing="20px" whiteSpace="nowrap">
          <ChakraLink as={RouterLink} to="/">Home</ChakraLink>
          <ChakraLink as={RouterLink} to="/products">Products</ChakraLink>
          <ChakraLink as={RouterLink} to="/checkout">Cart ({cartList.length})</ChakraLink>
          <ChakraLink as={RouterLink} to="/admin">Admin Page</ChakraLink>
        </HStack>
      </Flex>
    </Container>
  )
}

const containerStyle: SystemStyleObject = {
  maxWidth: "100%",
  backgroundColor: theme.colors.pink,
}

const flexStyle: SystemStyleObject = {
  p: "10px",
  alignItems: "center"
}
