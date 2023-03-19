import { Container, Flex, Heading, HStack, Icon, Link as ChakraLink, Spacer, SystemStyleObject, theme } from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../CartContext";

export function Header() {

  const { totalItems } = useCart();

  return (
    <Container as="header" sx={containerStyle}>
      <Flex as="nav" sx={flexStyle}>
        <Heading as="h1" width="100%" fontFamily={'Comfortaa, sans-serif'} fontSize={"2rem"}>Boba shop!</Heading>
        <Spacer />

        <HStack spacing="20px" whiteSpace="nowrap">
          <ChakraLink as={RouterLink} to="/">Home</ChakraLink>
          <ChakraLink as={RouterLink} to="/products">Products</ChakraLink>
          <ChakraLink as={RouterLink} to="/admin"><Icon verticalAlign="sub" width="1.5em" height="1.5em" as={RiAdminFill}/></ChakraLink>
          <ChakraLink as={RouterLink} to="/checkout"><Icon verticalAlign="sub" width="1.5em" height="1.5em" as={IoMdCart} /> ({totalItems})</ChakraLink>
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
