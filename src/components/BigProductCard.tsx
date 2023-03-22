import {
  Box,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CloseButton,
  Flex,
  Heading,
  Icon,
  Image,
  Text, useBreakpointValue
} from "@chakra-ui/react";
import { useState } from "react";
import { BsCartPlus } from "react-icons/Bs";
import { useNavigate } from "react-router-dom";
import { Product, products } from "../../data";
import { useCart } from "../CartContext";



interface BigProductCardProps {
  product: Product;
  backgroundUrl: string;
  backgroundAlt: string;
}

export function BigProductCard({
  product,
  backgroundAlt,
  backgroundUrl,
}: BigProductCardProps) {
  const { addToCart, removeFromCart, cartList } = useCart();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const closeButtonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });





  const handleClose = () => {
    setVisible(false);
    navigate("/");
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      position="fixed"
      top="3rem"
      left="0"
    >
      {visible && (
        <Card
          align="center"
          direction={["column", "column", "row"]}
          sx={cardStyle}
        >
          <CloseButton sx={xButton} size={closeButtonSize} onClick={handleClose} />
          <Box sx={imageContainerStyle}>
            <Box sx={roundBG}>
              <Image sx={imageStyle2} src={backgroundUrl} alt={backgroundAlt} />
              <Image
                sx={imageStyle}
                src={product.image}
                alt={product.imageAlt}
              />
            </Box>
          </Box>
          <Box>
            <CardHeader sx={cardHeaderStyle}>
              <Heading sx={headingStyle}>{product.title}</Heading>
              <Heading sx={priceStyle}>${product.price}</Heading>
              <Text sx={textStyle}>{product.description}</Text>
            </CardHeader>
          <Box sx={infoBoxStyle}>
            <Text sx={textMarginStyle}>Allergens:</Text>
            <Flex direction="column" align={["center", "center", "left",]}><Text sx={inputText}>Milk</Text></Flex>
            <Text sx={textMarginStyle}>Ingredients:</Text>
            <Flex direction="column" align={["center", "center", "left"]}><Text sx={inputText}>Milk, sugar, black tea, taro powder, hopes and dreams. like whyMilk, sugar, black tea, taro powder, hopes and dreams. like why </Text></Flex>
            
          </Box>
            <CardFooter sx={cardFooterStyle}>
              <Button
                sx={buttonStyle}
                onClick={() => removeFromCart(products[0].id)}
              >
                -
              </Button>
              <Text>{cartList.length}</Text>
              <Button sx={buttonStyle} onClick={() => addToCart(products[0])}>
                +
              </Button>
              <Button
                sx={addButtonStyle}
                onClick={() => addToCart(products[0])}
              >
                <Icon sx={iconStyle} as={BsCartPlus} />
              </Button>
            </CardFooter>
          </Box>
        </Card>
      )}
    </Flex>
  );
}


const cardStyle = {
  height: ["auto", "auto", "85vh", "85vh"],
  width: ["90%", "90%", "95%", "95%"],
  boxShadow: "3px 3px 3px gray",
  backgroundColor: "product.bgColor",
  position: "relative",
  borderRadius: "1rem",
  bgGradient: "linear(green.100 30%, yellow.50 90%)",
  m: "1rem",
  pt: ["3rem", "3rem", "4rem", "4rem"],
  pb: ["7rem", "4rem", "4rem", "4rem"],
};

const xButton = {
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  zIndex: "400",
  size: ["sm", "md", "lg"],
};

const headingStyle = {
  color: "darkBrownText",
  textAlign: ["center", "center", "left"],
  fontSize: ["40px", "40px", "60px"],
};

const cardHeaderStyle = {
  mt: ["5rem", "-5rem", "-5rem"],
  m: ["0rem", "2rem"],
};

const infoBoxStyle = {
  mt: ["1rem", "-2rem", "2rem"],
  textAlign: ["center", "center", "left"],
  position: ["static", "static", "absolute"],
  left: ["auto", "auto", "42%"],
  top: ["auto", "auto", "30%"],
  transform: ["none", "none", "translateX(-50%)"],
};

const textMarginStyle = {
  fontFamily: 'Inconsolata, sans-serif',
  fontSize: ["16px", "16px", "22px", "22px"],
  color: "darkBrownText"
};

const inputText = {
  color: "lightBrownText",
  fontSize: ["12px", "12px", "16px", "16px"],
  whiteSpace: "pre-wrap",
  maxWidth: "200px",
  alignSelf: ["center", "center", "flex-start"]
}


const cardFooterStyle = {
  mt: ["0", "3rem", "3rem"],
  m: ["0rem", "1rem"],
  justifyContent: ["space-around", "space-around", "flex-start"],
};

const priceStyle = {
  color: "darkGreenButton",
  fontSize: "1.5rem",
  textAlign: ["center", "center", "left"],
};

const textStyle = {
  color: "lightBrownText",
  textAlign: ["center", "center", "left"],
  mt: "1rem",
};

const imageContainerStyle = {
  position: ["static", "static", "absolute"],
  top: ["50%", "50%", "55%", "50%"], // Adjust the top position for mobile, tablet, and desktop
  left: ["50%", "60%", "75%", "75%"], // Center the image horizontally for all screen sizes
  transform: ["none", "none", "translate(-50%, -50%)"],
  alignSelf: ["center", "center", "none"],
  mt: ["1rem", "1rem", "0"],
};

const roundBG = {
  backgroundColor: "bigMatchaCard",
  height: ["13rem", "13rem", "20rem", "25rem"],
  width: ["13rem", "13rem", "20rem", "25rem"],
  borderRadius: "50%",
  mt: "1rem",
  position: "relative",
};

const imageStyle = {
  position: "absolute",
  top: ["50%", "40%", "40%", "40%"],
  left: "50%",
  transform: "translate(-50%, -50%)",
  objectFit: "cover",
  width: ["35%", "40%", "40%", "40%"],
  zIndex: "200",
};

const imageStyle2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  zIndex: "100",
};

const buttonStyle = {
  backgroundColor: "darkGreenButton",
  color: "white",
  borderRadius: "4rem",
  mx: "1rem",
};

const addButtonStyle = {
  backgroundColor: "yellowButton",
  borderRadius: "4rem",
  width: "5rem",
};

const iconStyle = {
  height: "1.5rem",
  width: "1.5rem",
};
