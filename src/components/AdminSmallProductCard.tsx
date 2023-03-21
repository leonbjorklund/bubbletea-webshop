import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Card,
  Flex,
  Image,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";

interface WTF {
  image: string;
  imageAlt: string;
}

export function AdminSmallProductCard({ image, imageAlt }: WTF) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const roundBG = {
    backgroundColor: "#FFF",
    height: "auto",
    width: "90%",
    aspectRatio: "1",
    borderRadius: "50%",
    mt: ["5%"],
    mb: [".3rem", ".5rem", "0rem", "1rem"],
    position: "relative",
    boxShadow: "1px 5px 5px gray",
  };

  return (
    <Card align="center" sx={cardStyle}>
      <Box sx={roundBG}>
        <Image sx={imageStyle} src={image} alt={imageAlt} />
      </Box>
      <Text sx={headerStyle}>Title</Text>
      <Text sx={textStyle}>Price</Text>
      <Flex>
        <Button sx={buttonStyle}>Edit </Button>
        <Button sx={deleteButtonStyle} onClick={onOpen}>
          Delete
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Product
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={onClose} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Flex>
    </Card>
  );
}

const cardStyle = {
  backgroundColor: "lightYellow",
  boxShadow: "3px 3px 5px gray",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  overflow: "hidden",
  transition: "0.3s ease-in-out",
  ":hover": {
    backgroundColor: "#f3e5d7",
  },
};

const headerStyle = {
  textAlign: "center",
  color: "darkBrownText",
  margin: ".5rem",
  fontSize: ["1rem", "1rem", "1.4rem"],
};

const textStyle = {
  textAlign: "center",
  color: "lightBrownText",
  fontSize: ["1rem", "1rem", "1.4rem"],
};

const buttonStyle = {
  margin: "5%",
  backgroundColor: "#f5c945",
  color: "white",
  _hover: {
    backgroundColor: "darkPinkButton",
    color: "white",
  },
};

const deleteButtonStyle = {
  margin: "5%",
  backgroundColor: "#eb3f3f",
  color: "white",
  _hover: {
    backgroundColor: "darkPinkButton",
    color: "white",
  },
};

const imageStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  objectFit: "cover",
  width: "35%",
};
