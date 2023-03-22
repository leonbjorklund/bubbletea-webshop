import { Box, Button, Center, Container, Flex, Heading, Image, Stack, SystemStyleObject, Text } from "@chakra-ui/react";
import { Products } from "../components/Products";
import { TimeForTeaCard } from "../components/TimeForTeaCard";

export function HomePage() {
  return (
    <Box sx={bigGradient}>
      <Flex sx={gradientBackground} display={["row", "row", "flex"]} paddingTop={[ "0rem", "0rem", "5rem"]} >
        <Container marginRight="auto" zIndex={20}>
            <Image src="/images/showcaseimg.png" alt="Image of bubble tea" width="auto" height={["100px","150px","auto"]} display={["none", "none", "flex"]}/>
        </Container>
        <Container>
          <Heading fontSize={["2rem", "2.5rem", "3.5rem"]} color={"lightBrownText"}>
            Best boba ever
          </Heading>
          <Text fontSize={[ "2.5rem", "2rem"]} color={"lightBrownText"} fontWeight="bold" display={["none", "none", "flex"]}>
            In love with React Next
          </Text>
          <Text fontSize='16px' color={"lightBrownText"} fontFamily='Comfortaa' marginTop="1rem">
            In love with React Next  In love with React Next  In love with React Next  In love with React Next  In love with React Next  In love with React Next In love with React Next  In love with React Next  In love with React Next  In love with React Next
          </Text>
          <Center>
          <Image src="/images/showcaseimg.png" alt="Image of bubble tea" width="auto" height={["100px","13rem","auto"]} display={["flex", "flex", "none"]}/>
          </Center>
          <Stack direction={['column', null, 'row']} spacing={4} align='center' justifyContent="center" marginTop="40px" display={["none", "none", "none", "flex"]}>
            <Button sx={buttonStyling}>
              PRODUCTS
            </Button>
            <Button sx={buttonStyling}>
              RECIPES
            </Button>
          </Stack>
        </Container>
      </Flex>
      <Image src="/images/crescent.png" alt="" width="auto" height="auto" bg={"pink"} />
      <Products />
      <TimeForTeaCard />
    </Box>
  );
}

const gradientBackground: SystemStyleObject = {
  background: 'rgb(254, 211, 212)',
  backgroundImage: 'linear-gradient(0deg, rgba(254, 211, 212, 1) 0%, rgba(255, 241, 221, 1) 47%, rgba(254, 211, 212, 1) 100%, rgba(255, 255, 255, 1) 100%)',
  width: "100%",
  height: "20rem",
  color: "lightBrownText",
  fontFamily: 'Inconsolata',
};

const bigGradient: SystemStyleObject = {
  backgroundImage: 'linear-gradient(to bottom, transparent 30%, #FED3D4)',
  backgroundColor: "#fffaf4"
};


const buttonStyling: SystemStyleObject = {
  colorScheme: 'brown',
  variant: 'outline',
  borderRadius: "50px",
  border: "2px",
  padding: "25px",
  fontFamily: 'Comfortaa',
  background: "none",
  _hover: {
    color: "white",
  },
};
