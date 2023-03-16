import { Box, Button, Card, CardFooter, CardHeader, CloseButton, Icon, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsCartPlus } from "react-icons/Bs";
import { products } from "../../data";
import { useCart } from "../CartContext";

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
  const { addToCart, removeFromCart, cartList } = useCart();

  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

 
  return (
    <div>
    {visible && (
    <Card align="center" sx={cardStyle}>
      <CloseButton sx={xButton} onClick={handleClose} />
      <Box sx={roundBG}>
        <Image sx={imageStyle2} src={backgroundUrl} alt={backgroundAlt} />
        <Image sx={imageStyle} src={imageUrl} alt={imageAlt} />
      </Box>
      <CardHeader >
        <Text sx={headingStyle}>{name}</Text> 
        <Text sx={priceStyle}>{price}</Text>
        <Text sx={textStyle}>{description}</Text>
      </CardHeader>
      <CardFooter>
          <Button sx={buttonStyle} onClick={() => removeFromCart(products[0].id)}>
           -
          </Button>
          <Text>{cartList.length}</Text>
          <Button sx={buttonStyle} onClick={() => addToCart(products[0])}>
           +
          </Button>
        <Button sx={addButtonStyle} onClick={() => addToCart(products[0])}><Icon sx={iconStyle} as={BsCartPlus} /></Button>
        
      </CardFooter>
    </Card>
    
    )}
    </div>
  );
}

const cardStyle = {
  height: "100%",
  width: "30%",
  boxShadow: "3px 3px 3px gray",
  backgroundColor: "matchaCard",
  position: "relative",
  borderRadius: "1rem",
  bgGradient: "linear(green.100 30%, yellow.50 90%)",
  m: "1rem",
}

const xButton = {
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  zIndex: "400",
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

const roundBG = {
  backgroundColor: "bigMatchaCard",
  height: "13rem",
  width: "13rem",
  borderRadius: "50%",
  mt: "1rem",
  position: "relative",
};

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

const buttonStyle = {
  backgroundColor: "darkGreenButton",
  color: "white",
  borderRadius: "4rem",
}

const addButtonStyle ={
  backgroundColor: "yellowButton",
  borderRadius: "4rem",
  width: "5rem",
}

const iconStyle = {
  height: "1.5rem",
  width: "1.5rem",
}



