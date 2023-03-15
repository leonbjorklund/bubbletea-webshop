import { Box, Card, CardFooter, CardHeader, Image, Text } from "@chakra-ui/react";

interface BigProductCardProps {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  backgroundUrl: string;
  backgroundAlt: string;
}

export function BigProductCard({ 
  name, price, description, imageUrl, imageAlt, backgroundUrl, backgroundAlt, 
 }: BigProductCardProps) {
  const roundBG = {
    backgroundColor: "matchaBackground",
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
        <Image sx={imageStyle2} src={backgroundUrl} alt={backgroundAlt} />
        <Image sx={imageStyle} src={imageUrl} alt={imageAlt} />
      </Box>
      <CardHeader align="center">
        <Text sx={headingStyle}>{name}</Text> 
        <Text sx={priceStyle}>{price}</Text>
        <Text sx={textStyle}>{description}</Text>
      </CardHeader>
      <CardFooter>
        
      </CardFooter>
    </Card>
  )
}

const cardStyle = {
  height: "100%",
  width: "100%",
  boxShadow: "3px 3px 3px gray",
  backgroundColor: "matchaCard",
}

const headingStyle = {
  color: "darkBrownText",
}

const priceStyle = {
  color: "darkGreenButton",
}

const textStyle = {
  color: "lightBrownText",
}

const imageStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  objectFit: "cover",
  width: "35%",
  zIndex: "300"
};

const imageStyle2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  zIndex: "100"
};



