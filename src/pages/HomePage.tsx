import { Box, Container, Heading } from "@chakra-ui/react";
import { TimeForTeaCard } from "../components/TimeForTeaCard";

export function HomePage() {

  return (
    <Box>
      <Container as="section" maxWidth="4xl"  my="">
      <Heading>This is homepage!</Heading>
    </Container>
    <TimeForTeaCard></TimeForTeaCard>

    </Box>

  )
}
