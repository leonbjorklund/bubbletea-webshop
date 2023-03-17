import { HamburgerIcon } from "@chakra-ui/icons";
import { Container, Flex, HStack, Icon, IconButton, Image, Link as ChakraLink, Spacer, SystemStyleObject, theme } from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../CartContext";

export function Header() {

  const { cartList } = useCart();

  return (
    <Container as="header" sx={containerStyle}>
      <Flex as="nav" sx={flexStyle}>
      <IconButton
          aria-label="Hamburger menu"
          icon={<HamburgerIcon />}
          variant="ghost"
          size="lg"
          display={{ base: "block", md: "none" }}
          mr={2}
        />
        <Image src="/images/bobablissicon.png" alt="Logo" sx={logo} />
        <Image src="/images/bobablisstextlogo.png" alt="Logo" sx={logoText} />
        <Spacer />

        <HStack spacing="20px" whiteSpace="nowrap" display={{ base: "none", md: "flex" }}>
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
  color:"lightBrownText"
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
