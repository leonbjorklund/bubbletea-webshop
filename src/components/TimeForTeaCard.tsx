import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function TimeForTeaCard() {
  return (
    <Box bg={"CartBackgroundYellow"} h={["30rem", "35rem", "25rem"]} w={"100%"}>
      <Container
        maxW={"container.xl"}
        bg={"red"}
        h={"100%"}
        display={"flex"}
        flexDirection={["column", "column", "row"]}
      >
          <Flex
            textAlign={["center","center","left",]}
            flexDirection={"column"}
            justifyContent={["center", "center", "center"]}
            alignItems={["center","center","flex-start",]}
            bg={"blue"}
            h={"100%"}
            w={["100%", "100%", "50%"]}
          >
            
            <Box maxW={"22rem"} marginLeft={[0,0,4,7]} >
              <Text>
              <Heading fontSize={["2rem","2.5rem","3rem"]}>Time for tea</Heading>
                Time for tea - weird placeholder text about tea. This talks
                about tea on and on, I am sad but tea makes me happy. Happy
                happy happy.
              </Text>
            </Box>
          </Flex>
        <Box
          bg={"purple"}
          h={["100%", "130%", "100%", "100%"]}
          w={["100%", "100%", "50%"]}
          minWidth={["100%", "430px"]}
          overflow={"hidden"}
        >
          <Image
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
