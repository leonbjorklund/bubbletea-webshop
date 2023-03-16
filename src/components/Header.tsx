import { Container, Flex, HStack, Icon, Image, Link as ChakraLink, Spacer, SystemStyleObject, theme } from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../CartContext";

export function Header() {

  const { cartList } = useCart();

  return (
    <Container as="header" sx={containerStyle}>
      <Flex as="nav" sx={flexStyle}>
        <Image src="/images/bobablissicon.png" alt="Logo" sx={logo} />
        <Image src="/images/bobablisstextlogo.png" alt="Logo" sx={logoText} />
        <Spacer />

        <HStack spacing="20px" whiteSpace="nowrap">
          <ChakraLink as={RouterLink} to="/">Home</ChakraLink>
          <ChakraLink as={RouterLink} to="/products">Products</ChakraLink>
          <ChakraLink as={RouterLink} to="/admin"><Icon verticalAlign="sub" width="1.5em" height="1.5em" as={RiAdminFill}/></ChakraLink>
          <ChakraLink as={RouterLink} to="/checkout"><Icon verticalAlign="sub" width="1.5em" height="1.5em" as={IoMdCart} /> ({cartList.length})</ChakraLink>
        </HStack>
      </Flex>
    </Container>
  )
}

const containerStyle: SystemStyleObject = {
  maxWidth: "100%",
  backgroundColor: theme.colors.pink,
  color:"darkBrownText"
}

const flexStyle: SystemStyleObject = {
  p: "10px",
  alignItems: "center"
}

const logo: SystemStyleObject = {
  width: "5rem",
}

const logoText: SystemStyleObject = {
  width: "10rem",
}
