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
    <Box bg={"CartBackgroundYellow"} h={["30rem", "35rem", "25rem"]} w={"100%"}>
      <Container
        maxW={"container.xl"}
        h={"100%"}
        display={"flex"}
        flexDirection={["column", "column", "row"]}
      >
        <Flex
          textAlign={["center", "center", "left"]}
          flexDirection={"column"}
          justifyContent={["center", "space-around", "center"]}
          alignItems={["center", "center", "flex-start"]}
          h={"100%"}
          w={["100%", "100%", "50%"]}
        >
          <Box maxW={"22rem"} marginLeft={[0, 0, 4, 7]}>
            <Heading fontSize={["2rem", "2.5rem", "3rem"]} mb={[1, 2]} color={"darkBrownText"}>
              Time for tea
            </Heading>
            <Text color={"darkBrownText"} >
              Time for tea - weird placeholder text about tea. This talks about
              tea on and on, I am sad but tea makes me happy. Happy happy happy.
            </Text>
            <Button
            color={"white"}
            fontSize={[13,13,14]}
              backgroundColor={"darkPinkButton"}
              mt={[2, 2, 3]}
              ml={[0, 0, -1]}
              _hover={{ backgroundColor: "#c27b7b" }}
              _active={{transform: "scale(0.96)"}}
            >
              See all drinks!
            </Button>
          </Box>
        </Flex>
        <Box
          h={["110%", "130%", "100%", "100%"]}
          w={["100%", "100%", "50%", "50%"]}
          minWidth={["100%", "430px"]}
          overflow={"hidden"}
        >
          <Image
            borderRadius={"3px"}
            src={"/images/bobatea 2.png"}
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
