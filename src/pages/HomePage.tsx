import { Box, Button, Container, Flex, Heading, Image, Stack, SystemStyleObject, Text } from "@chakra-ui/react";
import { TimeForTeaCard } from "../components/TimeForTeaCard";

export function HomePage() {
  return (
    <Box>

<Flex sx={background}>
    <Container marginRight="auto">
    <Image src="path/to/image" alt="Image description" />
  </Container>

  <Container>
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
        </Flex>

      <TimeForTeaCard></TimeForTeaCard>
    </Box>
  );
}

const background: SystemStyleObject = {
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

