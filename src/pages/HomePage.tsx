import { Box, Container, Flex, Heading, SystemStyleObject, Text } from "@chakra-ui/react";
import { TimeForTeaCard } from "../components/TimeForTeaCard";

export function HomePage() {
  return (
    <Box>

<Flex sx={background} justifyContent="center" maxWidth="4xl" height="20rem">
  <Container marginLeft="auto">
    <Heading
      fontSize={["2rem", "2.5rem", "3rem"]}
      mb={[1, 2]}
      color={"darkBrownText"}
    >
      Best boba ever
    </Heading>

    <Text 
      fontSize='2xl'
      color={"darkBrownText"}
    >
      In love with React Next
    </Text>

    <Text 
      fontSize='lg'
      color={"darkBrownText"}
    >
      In love with React Next
    </Text>
  </Container>
</Flex>



      <TimeForTeaCard></TimeForTeaCard>
    </Box>
  );
}

const background: SystemStyleObject = {
  background: 'rgb(255, 240, 221)',
  backgroundImage: 'radial-gradient(circle, rgba(255,240,221,1) 9%, rgba(254,211,212,1) 100%)'
};

