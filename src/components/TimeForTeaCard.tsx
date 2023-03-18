import { Box, Container, Image } from "@chakra-ui/react";

export function TimeForTeaCard () {
  return (
    <Box bg={"CartBackgroundYellow"} h={"30rem"} w={"100%"}>
      <Container maxW={"container.xl"} bg={"red"} h={"100%"} display={"flex"}>
        <Box bg={"blue"} h={"100%"} w={"50%"}></Box>
        <Box bg={"purple"} h={"100%"} w={"50%"} position={"relative"} overflow={"hidden"}>
          <Image
            src="/images/bobatea 2.png"
            alt="boba picture"
            objectFit={"cover"}
            position={"absolute"}
            top={"0"}
            left={"0"}
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Container>
    </Box>
  );
}
const imgSx = {
  objectFit: "cover",
  objectPosition:"center",
  width:"100%"
    
}