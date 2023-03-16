import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text
} from "@chakra-ui/react";
import { useCart } from "../CartContext";

interface SmallProductCardProps {
  bgColor?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function SmallProductCard({
  bgColor = "pink",
  imageUrl,
  imageAlt,
}: SmallProductCardProps) {
  const { addToCart } = useCart();

  const roundBG = {
    backgroundColor: bgColor,
    height: "13rem",
    width: "13rem",
    borderRadius: "50%",
    mt: "1rem",
    position: "relative",
    boxShadow: "1px 5px 5px gray"
  };

  return (
    <Card align="center" sx={cardStyle}>
      <Box sx={roundBG}>
        <Image sx={imageStyle} src={imageUrl} alt={imageAlt} />
      </Box>
      <CardHeader>
        <Text sx={headerStyle}>Matcha Latte</Text>
      </CardHeader>
      <Text sx={textStyle}>$6.50</Text>
      <CardBody></CardBody>
      <CardFooter>
        <Button sx={buttonStyle}>Add to cart </Button>
      </CardFooter>
    </Card>
  );
}

const cardStyle = {
  backgroundColor: "lightYellow",
  boxShadow: "3px 3px 5px gray",
  height: "100%",
  width: "100%",
};

const headerStyle = {
  color: "darkBrownText",
  fontSize: "l",
};

const textStyle = {
  color: "lightBrownText",
  fontSize: "l",
  mb: "-3rem",
};

const buttonStyle = {
  backgroundColor: "pinkCardButton",
  color: "lightBrownText",
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