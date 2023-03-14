import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem, Icon,
  Text
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";

export function Footer() {
  return (
    <Box as="footer" sx={footerStyle}>
      <Container sx={containerStyle}>
        <Grid sx={gridStyles}>
          <Flex sx={gridItemStyle}>
          </Flex>
          <GridItem sx={gridItemStyle} />
          <Flex sx={gridItemStyle}>
            <Center h="100%" w="25%">
              <Icon w={6} h={6} 
               as={IoLocationOutline} />
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
          <Flex sx={gridItemStyle}></Flex>
        </Grid>
      </Container>
    </Box>
  );
}

const footerStyle = {
  color: "lightBrownText",
  backgroundColor: "pink",
  maxWidth: "100%",
  height: ["31rem", "27rem", "16rem"],
};

const containerStyle = {
  maxWidth: "70rem",
  height: "100%",
  paddingTop: ["2rem", "3rem"],
};

const gridStyles = {
  templateColumns: "repeat(1, 1fr)",
  gap: ["1rem", "1.5rem", "2rem"],
  gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
  placeItems: "center",
};

const gridItemStyle = {
  padding: ".5rem",
  backgroundColor: "transparent",
  height: ["6rem", "10rem", "10rem"],
  width: ["70%", "100%", "100%"],
};
