import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Icon,
  Image,
  Text
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { TbCup } from "react-icons/tb";

export function Footer() {
  return (
    <Box as="footer" sx={footerStyle}>
      <Container sx={containerStyle}>
        <Grid sx={gridStyles}>
          <Flex sx={gridItemStyle}>
            <Center paddingLeft={"1rem"} h="" w="6rem">
              <Image src="/images/bobasmile.png" alt="bobasmile"></Image>
            </Center>
            <Center h="100%" w="60%">
              <Image src="/images/bobatitle.png"></Image>
            </Center>
          </Flex>
          <Flex sx={gridItemStyle}>
            <Center h="100%" w="20%">
              <Icon w={6} h={6} as={TbCup} />
            </Center>
            <Flex
              h="100%"
              w="75%"
              direction={"column"}
              justify={"center"}
              whiteSpace={"nowrap"}
            >
              <Text as="p" fontSize="sm">
                Opening hours:
              </Text>
              <Text as="p" fontSize="sm">
                Monday - Friday: 10:00-20:00
              </Text>
              <Text as="p" fontSize="sm">
                Saturday: 10:00-18:00
              </Text>
              <Text as="p" fontSize="sm">
                Sunday: 11:00-17:00
              </Text>
            </Flex>
          </Flex>
          <Flex sx={gridItemStyle}>
            <Center h="100%" w="20%">
              <Icon w={6} h={6} as={IoLocationOutline} />
            </Center>
            <Flex
              h="100%"
              w="7%"
              direction={"column"}
              justify={"center"}
              whiteSpace={"nowrap"}
            >
              <Text as="address" fontSize="sm">
                Sverigegatan 112
              </Text>
              <Text as="address" fontSize="sm">
                Göteborg 45762
              </Text>
              <Text as="address" fontSize="sm">
                Sweden
              </Text>
            </Flex>
          </Flex>
          <Flex sx={gridItemStyle} direction={"column"} justify={"center"} >
            <Flex
              h="2.5rem"
              w="100%"
              direction={"row"}
              align="center"
              paddingLeft="10%"
            >
              <PhoneIcon w={5} h={5}></PhoneIcon>
              <Text as="p" fontSize="sm" paddingLeft={".5rem"}>
                073XX- XXXXXX
              </Text>
            </Flex>
            <Flex
              h="2.5rem"
              w="100%"
              direction={"row"}
              align="center"
              paddingLeft="10%"
            >
              <EmailIcon w={5} h={5}></EmailIcon>
              <Text as="p" fontSize="sm" whiteSpace={"normal"} paddingLeft={".5rem"}>
                Boba@mail.hej
              </Text>
            </Flex>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
}

const footerStyle = {
  color: "lightBrownText",
  backgroundColor: "pink",
  maxWidth: "100%",
  height: ["33rem", "27rem", "16rem"],
};

const containerStyle = {
  maxWidth: "70rem",
  height: "100%",
  paddingTop: ["1rem", "2.5rem"],
};

const gridStyles = {
  templateColumns: "repeat(1, 1fr)",
  gap: ["1rem", "1.1rem", "2rem"],
  gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
  placeItems: "center",
};

const gridItemStyle = {
  padding: ".5rem",
  backgroundColor: "transparent",
  height: ["7rem", "10rem", "10rem"],
  width: ["70%", "100%", "100%"],
};
