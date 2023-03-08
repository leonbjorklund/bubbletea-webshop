import { Flex, Heading, HStack, Link as ChakraLink, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


export function Header() {

  return (

    <Flex as="nav" p="10px" bg="pink" alignItems="center">
      <Heading as="h1">Boba shop!</Heading>
      <Spacer />

      <HStack spacing="20px">
        <ChakraLink as={RouterLink} to="/">Home</ChakraLink>
        <ChakraLink as={RouterLink} to="/products">Products</ChakraLink>
        <ChakraLink as={RouterLink} to="/checkout">Cart</ChakraLink>
        <ChakraLink as={RouterLink} to="/admin">Admin Page</ChakraLink>
      </HStack>
    </Flex>
  )
}
