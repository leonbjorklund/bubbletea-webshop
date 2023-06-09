import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";

export function TimeForTeaCard() {
  return (
    // Main container with a background color and defined height and width
    <Box bg={"CartBackgroundYellow"} h={["30rem", "35rem", "25rem"]} w={"100%"}>
      {/* Container with max-width and display properties */}
      <Container
        maxW={"container.xl"}
        h={"100%"}
        my={4}
        py={3}
        display={"flex"}
        flexDirection={["column", "column", "row"]}
      >
        {/* Flex container for text elements, adjusting alignment based on screen size */}
        <Flex
          py={3}
          textAlign={["center", "center", "left"]}
          flexDirection={"column"}
          justifyContent={["center", "space-around", "center"]}
          alignItems={["center", "center", "flex-start"]}
          h={"100%"}
          w={["100%", "100%", "50%"]}
        >
          {/* Container for the heading and text elements */}
          <Box maxW={"22rem"} marginLeft={[0, 0, 4, 7]}>
            <Heading
              fontSize={["2rem", "2.5rem", "3rem"]}
              mb={[1, 2]}
              color={"darkBrownText"}
            >
              Meet your next favorite.
            </Heading>
            <Text color={"darkBrownText"}>
              We've got something for everyone, and we know you'll find your
              next favorite on our menu.
            </Text>
            <Button
              color={"white"}
              fontSize={[13, 13, 14]}
              backgroundColor={"darkPinkButton"}
              mt={[2, 2, 3]}
              ml={[0, 0, -1]}
              _hover={{ backgroundColor: "#c27b7b" }}
              _active={{ transform: "scale(0.96)" }}
            >
              See all drinks
            </Button>
          </Box>
        </Flex>
        {/* Container for the image with height, width, min-width and overflow */}
        <Box
          h={["110%", "130%", "100%", "100%"]}
          w={["100%", "100%", "50%", "50%"]}
          minWidth={["100%", "430px"]}
          overflow={"hidden"}
        >
          <Image
            borderRadius={"3px"}
            src={"/images/three-bobas.png"}
            alt="boba picture"
            objectFit={"cover"}
            objectPosition={"50% 50%"}
            width={"100%"}
            height="100%"
          />
        </Box>
      </Container>
    </Box>
  );
}
