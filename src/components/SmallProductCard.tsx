import { Box, Button, Card, Image, Text } from "@chakra-ui/react";
import { Product } from "../../data";
import { useCart } from "../CartContext";

interface SmallProductCardProps {
  product: Product;
}

export function SmallProductCard({ product }: SmallProductCardProps) {
  const { addToCart } = useCart();

  const roundBG = {
    backgroundColor: product.bgColor,
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
          <Image sx={imageStyle} src={product.image} alt={product.imageAlt} />
      </Box>
      <Text as="h6" sx={headerStyle}>
        {product.title}
      </Text>
      <Text sx={textStyle}>{product.price}</Text>
      <Button sx={buttonStyle}>Add to cart </Button>
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
    transform: "scale(0.96)",
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