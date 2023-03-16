import {
  Box,
  Button,
  Card, Image,
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
    height: "auto",
    width:"90%",
    aspectRatio:"1",
    borderRadius: "50%",
    mt: ["5%"],
    mb: [".3rem",".5rem","0rem","1rem"],
    position: "relative",
    boxShadow: "1px 5px 5px gray"
  };

  return (
    <Card align="center" sx={cardStyle}>
      <Box sx={roundBG}>
        <Image sx={imageStyle} src={imageUrl} alt={imageAlt} />
      </Box>
        <Text as="h6" sx={headerStyle}>Matcha Latte Matcha</Text>
      <Text sx={textStyle}>$6.50</Text>
        <Button sx={buttonStyle}>Add to cart </Button>
    </Card>
  );
}

const cardStyle = {
  backgroundColor: "lightYellow",
  boxShadow: "3px 3px 5px gray",
  height: "100%",
  display: "Flex",
  justifyContent:"space-between",
  width: "100%",
};

const headerStyle = {
  textAlign:"center",
  color: "darkBrownText",
  margin:".5rem",
  fontSize: ["1rem","1rem","1.4rem",],
};

const textStyle = {
  textAlign:"center",
  color: "lightBrownText",
  fontSize: ["1rem","1rem","1.4rem",],
};

const buttonStyle = {
  margin:"5%",
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
