import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, Icon, IconButton, Image, Link as ChakraLink, Spacer, SystemStyleObject, theme, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../CartContext";

export function Header() {

  const { totalItems, cartList } = useCart();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  window.addEventListener("resize", handleResize);


  return (
    <Container as="header" sx={containerStyle}>
      <Flex as="nav" sx={flexStyle}>
         {/* LOGO */}
          <Image src="/images/bobablissicon.png" alt="Logo" sx={logo} />
          <Image src="/images/bobablisstextlogo.png" alt="Logo" sx={logoText} />
        <Spacer />
        
        {/* LINKS */}
        <HStack spacing="2rem" whiteSpace="nowrap" display={{ base: "none", md: "flex" }}>
          <ChakraLink as={RouterLink} to="/" sx={linkStyles}>Home</ChakraLink>
          <ChakraLink as={RouterLink} to="/admin" ><Icon verticalAlign="sub" width="1.8em" height="1.8em" as={RiAdminFill}/></ChakraLink>
        </HStack>
        <ChakraLink data-cy="cart-items-count-badge" as={RouterLink} to="/checkout" sx={{ linkStyles, display: "flex", alignItems: "center", ml: "1rem"}}><Icon verticalAlign="sub" width="1.8em" height="1.8em" as={IoMdCart}/>({totalItems})</ChakraLink>
         {/* HAMBURGER MENU */}
         <IconButton
           aria-label="Hamburger menu"
           variant="ghost"
           icon={<HamburgerIcon />}
           size="lg"
           display={{ base: "flex", md: "none" }}
           onClick={onOpen}
           _hover={{ backgroundColor: "darkPinkButton", color: "white" }}
/>

      </Flex>

      {/* HAMBURGER MENU DRAWER */}
      <Drawer placement="top" onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent sx={hamburgerMenuStyling}>
          <DrawerCloseButton />
          <Box py="4">
          <ChakraLink as={RouterLink} to="/" display="block" mx="4" my="2" >Home</ChakraLink>
          <ChakraLink as={RouterLink} to="/admin" display="block" mx="4" my="2" >Admin</ChakraLink>
          </Box>
        </DrawerContent>
      </Drawer>
    </Container>

  )
}

const containerStyle: SystemStyleObject = {
  maxWidth: "100%",
  backgroundColor: theme.colors.pink,
  color:"lightBrownText",
}

const linkStyles: SystemStyleObject = {
  _hover: {
    color:"white",
  },
}

const flexStyle: SystemStyleObject = {
  p: "10px",
  alignItems: "center",
  justifyContent: "center"
}

const logo: SystemStyleObject = {
  width: "5rem",
}

const logoText: SystemStyleObject = {
  width: "10rem",
  ml: "1rem"
}

const hamburgerMenuStyling: SystemStyleObject = {
  color: "lightBrownText",
  backgroundColor: "pink",
}