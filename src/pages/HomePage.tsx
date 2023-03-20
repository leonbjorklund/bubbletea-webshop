import { Box, Button, Container, Flex, Heading, Image, Stack, SystemStyleObject, Text } from "@chakra-ui/react";
import { TimeForTeaCard } from "../components/TimeForTeaCard";

export function HomePage() {
  return (
<Box>
  <Flex sx={background}>
    <Box position="absolute">
      <Box sx={circleBackground}></Box>
      <Container position="relative" zIndex="1" marginRight="auto">
        <Image
          src="/images/showcaseimg.png"
          alt="Image of bubble tea"
          width="auto"
          height="auto"
        />
      </Container>
      <Container position="relative" zIndex="1">
            
            <Heading
            fontSize={["2rem", "2.5rem", "3rem"]}
            color={"lightBrownText"}
            >
              Best boba ever
            </Heading>

    <Text 
      fontSize={["2rem", "2.5rem", "2rem"]}
      color={"lightBrownText"}
      fontWeight="bold"
    >
      In love with React Next
    </Text>

    <Text 
      fontSize='16px'
      color={"lightBrownText"}
    >
      In love with React Next  In love with React Next  In love with React Next  In love with React Next  In love with React Next  In love with React Next 
      In love with React Next  In love with React Next  In love with React Next  In love with React Next
    </Text>

    <Stack direction='row' spacing={4} align='center' justifyContent="center" marginTop="40px">
      <Button sx={buttonStyling}>
        PRODUCTS
        </Button>
        <Button sx={buttonStyling}>
        RECIPIES
        </Button>
        
        </Stack>
        </Container>
        </Box>
        </Flex>

      <TimeForTeaCard></TimeForTeaCard>
    </Box>
  );
}

const circleBackground: SystemStyleObject = {
  width: "100%",
  height: "50vh",
  borderRadius: "50%",
  backgroundColor: "pink",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "1"
};
 
const background: SystemStyleObject = {
  position:"relative",
  background: 'rgb(254,211,212)',
  backgroundImage: 'linear-gradient(0deg, rgba(254,211,212,1) 0%, rgba(255,241,221,1) 47%, rgba(254,211,212,1) 100%, rgba(255,255,255,1) 100%)',
  justifyContent: "center",
  alignItems: "center",
  margin: "0",
  width: "100%",
  height: "40rem",
  color: "lightBrownText",
  fontFamily: 'Inconsolata',
};

const buttonStyling: SystemStyleObject = {
  colorScheme:'brown',
  variant:'outline',
  borderRadius:"50px",
  border:"2px",
  padding:"25px",
  fontFamily: 'Comfortaa',
  background: "none",
}

